import { NextResponse } from "next/server";
import { getGithubSnapshot } from "@/lib/github";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

export async function GET() {
  try {
    const snapshot = await getGithubSnapshot();

    if (!snapshot) {
      return NextResponse.json(
        {
          error: "Unable to load GitHub profile data",
        },
        { status: 502 },
      );
    }

    return NextResponse.json(snapshot);
  } catch {
    return NextResponse.json(
      {
        error: "Unable to load GitHub profile data",
      },
      { status: 502 },
    );
  }
}
