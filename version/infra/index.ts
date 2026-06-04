import * as pulumi from "@pulumi/pulumi";
import * as azure from "@pulumi/azure-native";
import * as azuread from "@pulumi/azuread";

const config = new pulumi.Config();
const location          = config.get("location")           ?? "eastus";
const nodeCount         = config.getNumber("nodeCount")     ?? 2;
const nodeVmSize        = config.get("nodeVmSize")          ?? "Standard_B2s";
const kubernetesVersion = config.get("kubernetesVersion")   ?? "1.30";

// ---------------------------------------------------------------------------
// Resource Group — dedicated subscription is set via PULUMI_AZURE_SUBSCRIPTION
// or `az account set --subscription <id>` before running pulumi up.
// ---------------------------------------------------------------------------
const rg = new azure.resources.ResourceGroup("rg", {
  resourceGroupName: "rg-movie-match",
  location,
});

// ---------------------------------------------------------------------------
// Azure Container Registry
// ---------------------------------------------------------------------------
const acr = new azure.containerregistry.Registry("acr", {
  registryName: "moviematchacr",
  resourceGroupName: rg.name,
  location,
  sku: { name: "Basic" },
  adminUserEnabled: false,
});

// ---------------------------------------------------------------------------
// AKS Cluster — system-assigned identity so we can grant AcrPull cleanly
// ---------------------------------------------------------------------------
const cluster = new azure.containerservice.ManagedCluster("aks", {
  resourceName: "movie-match-cluster",
  resourceGroupName: rg.name,
  location,
  dnsPrefix: "movie-match",
  kubernetesVersion,
  enableRBAC: true,
  identity: { type: "SystemAssigned" },
  agentPoolProfiles: [
    {
      name: "default",
      count: nodeCount,
      vmSize: nodeVmSize,
      mode: "System",
      osType: "Linux",
    },
  ],
});

// Grant AcrPull to the AKS kubelet identity so nodes can pull images
// Role definition ID for AcrPull (constant across all Azure tenants)
const acrPullRoleDefId =
  "/providers/Microsoft.Authorization/roleDefinitions/7f951dda-4ed3-4680-a7ca-43fe172d538d";

new azure.authorization.RoleAssignment("aks-acr-pull", {
  principalId: cluster.identityProfile.apply(
    (p) => p!["kubeletidentity"].objectId!,
  ),
  principalType: "ServicePrincipal",
  roleDefinitionId: acrPullRoleDefId,
  scope: acr.id,
});

// ---------------------------------------------------------------------------
// Service Principal for GitHub Actions CI/CD
// Needs: AcrPush on the registry + Contributor on the AKS cluster
// ---------------------------------------------------------------------------
const app = new azuread.Application("deploy-app", {
  displayName: "movie-match-deploy",
});

const sp = new azuread.ServicePrincipal("deploy-sp", {
  clientId: app.clientId,
});

const spSecret = new azuread.ServicePrincipalPassword("deploy-sp-secret", {
  servicePrincipalId: sp.id,
  endDateRelative: "8760h", // rotate annually
});

// AcrPush on the registry
const acrPushRoleDefId =
  "/providers/Microsoft.Authorization/roleDefinitions/8311e382-0749-4cb8-b61a-304f252e45ec";

new azure.authorization.RoleAssignment("sp-acr-push", {
  principalId: sp.objectId,
  principalType: "ServicePrincipal",
  roleDefinitionId: acrPushRoleDefId,
  scope: acr.id,
});

// Contributor on the AKS cluster (to run kubectl set image / rollout status)
const contributorRoleDefId =
  "/providers/Microsoft.Authorization/roleDefinitions/b24988ac-6180-42a0-ab88-20f7382dd24c";

new azure.authorization.RoleAssignment("sp-aks-contributor", {
  principalId: sp.objectId,
  principalType: "ServicePrincipal",
  roleDefinitionId: contributorRoleDefId,
  scope: cluster.id,
});

// ---------------------------------------------------------------------------
// Kubeconfig (admin — keep secret)
// ---------------------------------------------------------------------------
const kubeconfig = pulumi
  .all([rg.name, cluster.name])
  .apply(([rgName, clusterName]) =>
    azure.containerservice
      .listManagedClusterUserCredentials({
        resourceGroupName: rgName,
        resourceName: clusterName,
      })
      .then((creds) =>
        Buffer.from(creds.kubeconfigs![0].value, "base64").toString("utf-8"),
      ),
  );

// ---------------------------------------------------------------------------
// Outputs — run `pulumi stack output --show-secrets` to read secrets
// ---------------------------------------------------------------------------
export const resourceGroupName = rg.name;
export const acrLoginServer    = acr.loginServer;  // e.g. moviematchacr.azurecr.io
export const aksClusterName    = cluster.name;
export const kubeConfig        = pulumi.secret(kubeconfig);

// Copy these four values into GitHub repository secrets
export const githubSecrets = pulumi.secret(
  pulumi
    .all([app.clientId, spSecret.value, sp.applicationTenantId])
    .apply(([clientId, clientSecret, tenantId]) => ({
      AZURE_CLIENT_ID:       clientId,
      AZURE_CLIENT_SECRET:   clientSecret,
      AZURE_TENANT_ID:       tenantId,
      // AZURE_SUBSCRIPTION_ID: run `az account show --query id -o tsv`
    })),
);
