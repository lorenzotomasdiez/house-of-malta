import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import PosterItem from "./PosterItem"
import { topPosters } from "@/lib/utils"

interface PosterCarrouselProps {
  refToNext: React.RefObject<HTMLButtonElement>
  refToPrevious: React.RefObject<HTMLButtonElement>
}

export default function PosterCarrousel({ refToNext, refToPrevious }: PosterCarrouselProps) {
  return (
    <div className="w-full max-w-full overflow-hidden my-10">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          breakpoints: {
            '(min-width: 768px)': {
              slidesToScroll: 'auto',
              containScroll: 'trimSnaps',
            },
          },
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {topPosters.map((poster, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-auto">
              <PosterItem
                src={poster.src}
                alt={poster.alt}
                title={poster.title}
                description={poster.description}
                realSrc={poster.realSrc}
                realAlt={poster.realAlt}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious hidden ref={refToPrevious} />
        <CarouselNext hidden ref={refToNext} />
      </Carousel>
    </div>
  )
}
