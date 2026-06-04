import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { refreshRecommendations } from "@/actions/recommendations";

export const dynamic = "force-dynamic";

/** Return the user's persisted recommendations. */
export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const recommendations = await prisma.recommendation.findMany({
    where: { userId: session.user.id },
    orderBy: { score: "desc" },
  });

  return NextResponse.json({ recommendations });
}

/** Trigger a fresh recommendation run. */
export async function POST() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const count = await refreshRecommendations();
    return NextResponse.json({ count });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to generate recommendations";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
