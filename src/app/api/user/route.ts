import { authOptions } from "@/config/nextAuth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "No session" }, { status: 401 });
  }
  return NextResponse.json(session, { status: 200 });
}
