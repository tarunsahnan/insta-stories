import { NextResponse } from "next/server";
import { stories } from "./stories";
import { NextApiRequest, NextApiResponse } from "next";
import { StoryInterface } from "@/types/StoryInterface";

export async function GET() {
  return NextResponse.json({ stories }, { status: 200 });
}
