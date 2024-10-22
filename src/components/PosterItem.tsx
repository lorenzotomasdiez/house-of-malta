import type { Poster } from "@/lib/utils"

export default function PosterItem({ src, alt, title, description }: Poster) {
  return (
    <div className="flex flex-col gap-5 items-center justify-center mx-5">
      <div
        className="[perspective:1000px] relative rounded-xl shadow-xl shadow-black/10"
      >
        <div
          className={`relative shadow-xl rounded-xl transition-all duration-500 [transform-style:preserve-3d] w-[267.9px] h-[365.21px]`}
        >
          <div className="absolute inset-0 w-[267.9px] h-[365.21px] m-auto [backface-visibility:hidden]">
            <img src={src} alt={alt} className="h-full w-full object-cover shadow-black/40 rounded-xl" />
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
