import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { serializeProgram } from "@/lib/programs";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = await prisma.program.findFirst({ where: { slug, published: true } });
  if (!program) return NextResponse.json({ error: "Program not found" }, { status: 404 });
  return NextResponse.json({ data: serializeProgram(program) });
}
