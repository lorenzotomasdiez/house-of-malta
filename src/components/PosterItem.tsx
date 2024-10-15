import type { Poster } from "@/lib/utils"
import { useState } from "react"

export default function PosterItem({ src, alt, title, description, realSrc, realAlt }: Poster) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="flex flex-col gap-5 items-center justify-center mx-5">
      <div
        className="[perspective:1000px] relative bg-poster-bg rounded-xl p-10 shadow-xl shadow-black/10"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div
          className={`relative shadow-xl transition-all duration-500 [transform-style:preserve-3d] w-[267.9px] h-[365.21px] ${isFlipped ? '[transform:rotateY(180deg)]' : ''
            }`}
        >
          <img src="/frame.png" alt="Frame" className="absolute inset-0 w-full h-full object-cover z-20" />
          <div className="absolute inset-0 w-[216px] h-[313px] m-auto [backface-visibility:hidden]">
            <img src={src} alt={alt} className="h-full w-full object-cover shadow-black/40" />
          </div>
          <div className="absolute inset-0 w-[216px] h-[313px] m-auto [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <img src={realSrc} alt={realAlt} className="h-full w-full object-cover shadow-black/40" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <p className="text-lg font-semibold">
          {title}
        </p>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div >
  )
}
