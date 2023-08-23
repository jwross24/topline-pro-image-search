import Image from "next/image"

import { type PixabayImage } from "@/interfaces/image"

interface ImageListProps {
  images: PixabayImage[]
}

export function ImageList({ images }: ImageListProps) {
  if (images.length === 0) {
    return <p className="text-center leading-7">No images found.</p>
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {images.map((image) => (
        <div key={image.id} className="overflow-hidden rounded-md">
          <Image
            src={image.webformatURL}
            alt={image.tags}
            width={image.webformatWidth}
            height={image.webformatHeight}
            className="aspect-square h-auto w-auto rounded-md object-cover transition-all hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}
