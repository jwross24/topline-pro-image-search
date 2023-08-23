import Image from "next/image"
import { InfoCircledIcon, PersonIcon } from "@radix-ui/react-icons"

import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { PixabayImage } from "@/interfaces/image"

interface ImageDetailViewerProps {
  image: PixabayImage
}

export function ImageDetailViewer({ image }: ImageDetailViewerProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={image.webformatURL}
          alt={image.tags}
          width={image.webformatWidth}
          height={image.webformatHeight}
          className="aspect-square h-auto w-auto rounded-md object-cover transition-all hover:scale-105 hover:cursor-pointer"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle>Image details</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center">
          <Image
            src={image.largeImageURL}
            alt={image.tags}
            width={image.webformatWidth}
            height={image.webformatHeight}
          />
        </div>
        <div className="flex space-x-3">
          <div className="-mx-2 flex items-start space-x-4 rounded-md p-2">
            <PersonIcon className="mt-px h-5 w-5" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">User</p>
              <p className="text-sm">{image.user}</p>
            </div>
          </div>
          <Separator orientation="vertical" />
          <div className="-mx-2 flex items-start space-x-4 rounded-md p-2">
            <InfoCircledIcon className="mt-px h-5 w-5" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Tags</p>
              <div className="space-x-2">
                {image.tags.split(", ").map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
