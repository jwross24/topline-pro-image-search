import { NextRequest, NextResponse } from "next/server"
import ky from "ky-universal"

import { type ImageResponse } from "@/interfaces/image"

export async function GET(request: NextRequest) {
  if (!process.env.PIXABAY_API_KEY) {
    throw new Error("Please set the environment variable PIXABAY_API_KEY!")
  }

  const query = request.nextUrl.searchParams.get("query") as string

  const imageResponse = await ky("https://pixabay.com/api/", {
    searchParams: {
      key: process.env.PIXABAY_API_KEY,
      q: query,
      image_type: "photo",
      per_page: 20,
    },
  }).json<ImageResponse>()

  return NextResponse.json(imageResponse.hits)
}
