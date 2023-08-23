import ky from "ky-universal"
import { useQuery } from "@tanstack/react-query"
import { type PixabayImage } from "@/interfaces/image"

const getImages = async (query: string) => {
  if (query === "") {
    return []
  }

  return await ky(`/api?query=${query}`).json<Array<PixabayImage>>()
}

const useImages = (query: string) => {
  const { data: images, ...rest } = useQuery(
    ["images", query],
    () => getImages(query),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  )

  return {
    data: images || [],
    ...rest,
  }
}

export { useImages }
