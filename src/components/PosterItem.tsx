import type { Poster } from "@/lib/utils"
import { useState } from "react"

export default function PosterItem({ src, alt, title, description, realSrc, realAlt }: Poster) {
  const [isFlippedClicked, setIsFlippedClicked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="flex flex-col gap-5 items-center justify-center mx-5">
      <div
        className="[perspective:1000px] relative rounded-xl shadow-xl shadow-black/10"
        onClick={() => setIsFlippedClicked(!isFlippedClicked)}
      >
        <div
          className={`relative shadow-xl rounded-xl transition-all duration-500 [transform-style:preserve-3d] w-[267.9px] h-[365.21px] ${(isFlippedClicked) ? '[transform:rotateY(180deg)]' : ''}`}
        >
          <div className="absolute inset-0 w-[267.9px] h-[365.21px] m-auto [backface-visibility:hidden]">
            {
              !isFlippedClicked && (
                <div
                  className={`hidden md:block absolute inset-0 w-full h-full bg-black/50 z-20 ${isHovered ? 'md:opacity-100 opacity-0' : 'md:opacity-0 opacity-100'} transition-all duration-300`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <p className="text-white text-center text-lg font-semibold">Click to discover!</p>
                  </div>
                </div>
              )
            }
            <img src={src} alt={alt} className="h-full w-full object-cover shadow-black/40 rounded-xl" />
          </div>
          <div className="absolute inset-0 w-[267.9px] h-[365.21px] m-auto [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <img src={realSrc} alt={realAlt} className="h-full w-full object-cover shadow-black/40 rounded-xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-center text-white">
        <p className="text-lg font-semibold">
          {title}
        </p>
        <p className="text-sm text-neutral-400">
          {description}
        </p>
      </div>
    </div >
  )
}
