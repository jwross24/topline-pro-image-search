"use client"

import * as React from "react"

import { Separator } from "@/components/ui/separator"
import { ImageList } from "@/components/image-list"
import { Search } from "@/components/search"
import { useImages } from "@/hooks/useImages"

export default function IndexPage() {
  const [searchQuery, setSearchQuery] = React.useState("")

  const { data: images, refetch } = useImages(searchQuery)

  React.useEffect(() => {
    refetch()
  }, [searchQuery, refetch])

  return (
    <section className="container flex flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Search for your favorite images from Pixabay.
      </h2>
      <Search setSearchQuery={setSearchQuery} />
      <Separator className="my-4" />
      <ImageList images={images} />
    </section>
  )
}
