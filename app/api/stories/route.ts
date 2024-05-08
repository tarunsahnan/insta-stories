import { NextResponse } from "next/server";
import { stories, StoryInterface } from "./stories";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<StoryInterface[]>
) {
  return NextResponse.json({ stories }, { status: 200 });
}
