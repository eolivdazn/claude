import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Navbar } from "@/components/Navbar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Defense-in-depth: middleware already guards these routes.
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <div className="min-h-dvh">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-6">{children}</main>
    </div>
  );
}
