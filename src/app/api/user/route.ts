import { authOptions } from "@/config/nextAuth";
import { prisma } from "@/db/prismaClient";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // const session = await getServerSession(authOptions);
  // if (!session) {
  //   return NextResponse.json({ error: "No session" }, { status: 401 });
  // }
  const users = await prisma.user.findMany();
  return NextResponse.json(users, { status: 200 });
}
