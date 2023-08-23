import Image from "next/image"

import { type PixabayImage } from "@/interfaces/image"

interface ImageListProps {
  images: PixabayImage[]
}

export function ImageList({ images }: ImageListProps) {
  return (
    <div className="flex space-x-4 pb-4">
      {images.map((image) => (
        <div key={image.id} className="overflow-hidden rounded-md">
          <Image
            src={image.previewURL}
            alt={image.tags}
            width={image.previewWidth}
            height={image.previewHeight}
            className="aspect-square h-auto w-32 object-cover transition-all hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}
