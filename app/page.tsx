"use client"

import * as React from "react"

import { Separator } from "@/components/ui/separator"
import { ImageList } from "@/components/image-list"
import { Pagination } from "@/components/pagination"
import { Search } from "@/components/search"
import { useImages } from "@/hooks/useImages"
import {
  type PaginationState,
  PAGE_SIZE_OPTIONS,
} from "@/interfaces/pagination"

const INITIAL_PAGINATION_STATE = {
  pageIndex: 0,
  pageSize: PAGE_SIZE_OPTIONS[1],
}

export default function IndexPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [paginationState, setPaginationState] = React.useState<PaginationState>(
    INITIAL_PAGINATION_STATE
  )
  const [totalHits, setTotalHits] = React.useState(0)

  const { data: images, refetch } = useImages(searchQuery, paginationState)

  React.useEffect(() => {
    setPaginationState(INITIAL_PAGINATION_STATE)
    setTotalHits(0)
    refetch()
  }, [searchQuery, refetch])

  React.useEffect((): void => {
    refetch()
  }, [paginationState.pageIndex, refetch])

  React.useEffect(() => {
    setPaginationState((state) => ({ ...state, pageIndex: 0 }))
    refetch()
  }, [paginationState.pageSize, refetch])

  React.useEffect(() => {
    setTotalHits((totalHits) => Math.max(images?.totalHits, totalHits))
  }, [images?.totalHits, searchQuery])

  return (
    <section className="container flex flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Search for your favorite images from Pixabay.
      </h2>
      <Search setSearchQuery={setSearchQuery} />
      <Separator className="my-4" />
      <Pagination
        state={paginationState}
        setState={setPaginationState}
        total={totalHits}
      />
      <ImageList images={images.hits} />
    </section>
  )
}
