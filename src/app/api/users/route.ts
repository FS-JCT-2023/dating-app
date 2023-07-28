import { prisma } from "@/db/prismaClient";
import { getServerSession } from "@/lib/auth/authorization";
import { getPaginationParams } from "@/lib/params-utils";
import { NextRequest, NextResponse } from "next/server";

async function GET(req: NextRequest) {
  const session = await getServerSession();
  if (!session?.user || !(session.user.role in ["ADMIN", "MATCHMAKER"])) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { page, page_size } = getPaginationParams(req);
  try {
    const users = await prisma.user.findMany({
      skip: (page - 1) * page_size,
      take: page_size,
      where: {
        role: session.user.role === "ADMIN" ? undefined : "CLIENT",
      },
    });
    return NextResponse.json(users);
  } catch (e) {
    const error = e as Error;
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export { GET };
