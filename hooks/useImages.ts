import ky from "ky-universal"
import { useQuery } from "@tanstack/react-query"

import { type ImageResponse } from "@/interfaces/image"
import { type PaginationState } from "@/interfaces/pagination"

const EMPTY_IMAGE_RESPONSE: ImageResponse = {
  total: 0,
  totalHits: 0,
  hits: [],
}

const getImages = async (
  query: string,
  pageIndex: number,
  pageSize: number
) => {
  if (query === "") {
    return EMPTY_IMAGE_RESPONSE
  }

  return ky("/api", {
    searchParams: {
      query,
      page: pageIndex + 1,
      pageSize: pageSize,
    },
  }).json<ImageResponse>()
}

export function useImages(query: string, paginationState: PaginationState) {
  const { pageIndex, pageSize } = paginationState

  const { data: images, ...rest } = useQuery(
    ["images", { query, pageIndex, pageSize }],
    () => getImages(query, pageIndex, pageSize),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  )

  return {
    data: images || EMPTY_IMAGE_RESPONSE,
    ...rest,
  }
}
