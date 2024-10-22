import type { Poster } from "@/lib/utils"
import { useState, useRef, useEffect } from "react"

export default function PosterItem({ src, alt, title, description, realSrc, realAlt }: Poster) {
  const [isTransitioned, setIsTransitioned] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isTransitioned && videoRef.current) {
      setTimeout(() => {
        videoRef.current?.play()
      }, 1000)
    } else if (!isTransitioned && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isTransitioned])

  return (
    <div className="flex flex-col gap-5 items-center justify-center mx-5">
      <div
        className="relative rounded-xl shadow-xl shadow-black/10"
        onDoubleClick={() => setIsTransitioned(!isTransitioned)}
      >
        <div className="relative shadow-xl rounded-xl w-[267.9px] h-[365.21px] overflow-hidden lg:w-[321.28px] lg:h-[438.252px]">
          <div
            className={`absolute inset-0 w-full h-full ${isTransitioned
              ? 'pointer-events-none animate-submerge'
              : 'pointer-events-auto animate-submergeReverse'
              }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover shadow-black/40 rounded-xl"
            />
            {!isTransitioned && (
              <div
                className={`absolute inset-0 w-full h-full bg-black/50 z-20 ${isHovered ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-300 flex items-center justify-center`}
              >
                <p className="text-white text-center text-lg font-semibold">
                  Double click to enter!
                </p>
              </div>
            )}
          </div>
          <div
            className={`absolute inset-0 w-full h-full ${isTransitioned
              ? 'pointer-events-auto animate-emerge'
              : 'pointer-events-none animate-emergeReverse'
              }`}
          >
            <video
              ref={videoRef}
              src={realSrc}
              className="h-full w-full object-cover shadow-black/40 rounded-xl"
              muted
              playsInline
              onEnded={() => setIsTransitioned(false)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-center text-white">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
    </div>
  )
}