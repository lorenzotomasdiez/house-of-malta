import PosterCarrousel from "@/components/PosterCarrousel";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useRef } from "react";

export default function TopPosters() {
  const refToNext = useRef<HTMLButtonElement>(null);
  const refToPrevious = useRef<HTMLButtonElement>(null);

  return (
    <section className="container mx-auto py-[100px] bg-white" id="top">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold px-4 lg:text-4xl">Top Posters</h2>
        <div className="gap-4 hidden lg:flex">
          <Button
            variant="secondary"
            size="icon"
            ref={refToPrevious}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            ref={refToNext}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
      <PosterCarrousel
        refToNext={refToNext}
        refToPrevious={refToPrevious}
      />
    </section>
  )
}
