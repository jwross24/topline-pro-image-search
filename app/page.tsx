"use client"

import * as React from "react"

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
    <section className="container items-center gap-6 pb-8 pt-6 md:py-10">
      <Search setSearchQuery={setSearchQuery} />
      <ImageList images={images} />
    </section>
  )
}
