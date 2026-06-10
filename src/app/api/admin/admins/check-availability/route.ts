import { NextResponse } from "next/server";
import type { Prisma } from "../../../../../../generated/prisma/client";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");
  const email = searchParams.get("email");
  const excludeId = searchParams.get("excludeId");

  if (!username && !email) {
    return NextResponse.json(
      { error: "Username or email required" },
      { status: 400 },
    );
  }

  const or: Prisma.AdminWhereInput[] = [];
  if (username) or.push({ username });
  if (email) or.push({ email });

  const where: Prisma.AdminWhereInput = {
    ...(or.length > 0 ? { OR: or } : {}),
    ...(excludeId ? { id: { not: excludeId } } : {}),
  };

  const existing = await prisma.admin.findFirst({ where });
  return NextResponse.json({ available: !existing });
}
