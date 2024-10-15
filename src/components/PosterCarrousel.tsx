import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import PosterItem from "./PosterItem"
import { topPosters } from "@/lib/utils"


export default function PosterCarrousel() {
  return (
    <div className="w-full max-w-full overflow-hidden my-5">
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
        <CarouselPrevious hidden />
        <CarouselNext hidden />
      </Carousel>
    </div>
  )
}
