import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export interface Poster {
  src: string
  alt: string
  title: string
  description: string
  realSrc: string
  realAlt: string
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const topPosters: Poster[] = [
  {
    src: "/top/1.png",
    alt: "Vintage Poster of Art in Gozo",
    title: "Art in Gozo",
    description: "Gozo Island",
    realSrc: "/real/1.mp4",
    realAlt: "Art in Gozo",
  },
  {
    src: "/top/2.png",
    alt: "Vintage Poster of The Azure Window in Gozo Island",
    title: "The azure window",
    description: "Gozo Island",
    realSrc: "/real/2.mp4",
    realAlt: "Real images of The Azure Window",
  },
  {
    src: "/top/3.png",
    alt: "Vintage Poster of Cittadella in Gozo Island",
    title: "Cittadella",
    description: "Gozo Island",
    realSrc: "/real/3.mp4",
    realAlt: "Real images of Cittadella",
  },
  {
    src: "/top/4.png",
    alt: "Vintage Poster of Blue Lagoon in Comino Island",
    title: "Blue lagoon",
    description: "Comino Island",
    realSrc: "/real/4.mp4",
    realAlt: "Real images of Blue Lagoon",
  },
  {
    src: "/top/5.png",
    alt: "Vintage Poster of Fishing boats in Gozo Island",
    title: "Fishing boats",
    description: "Gozo Island",
    realSrc: "/real/5.mp4",
    realAlt: "Real images of Fishing boats",
  },
  {
    src: "/top/6.png",
    alt: "Vintage Poster of Dive in Gozo Island",
    title: "Dive",
    description: "Gozo Island",
    realSrc: "/real/6.mp4",
    realAlt: "Real images of Dive",
  },
  {
    src: "/top/7.png",
    alt: "Vintage Poster of Marsalforn in Gozo Island",
    title: "Marsalforn",
    description: "Gozo Island",
    realSrc: "/real/7.mp4",
    realAlt: "Real images of Marsalforn",
  },
  {
    src: "/top/8.png",
    alt: "Vintage Poster of Ramla Bay in Gozo Island",
    title: "Ramla Bay",
    description: "Gozo Island",
    realSrc: "/real/8.mp4",
    realAlt: "Real images of Ramla Bay",
  },
  {
    src: "/top/9.png",
    alt: "Vintage Poster of Ta' Pinu in Gozo Island",
    title: "Ta' Pinu",
    description: "Gozo Island",
    realSrc: "/real/9.mp4",
    realAlt: "Real images of Ta' Pinu",
  },
  {
    src: "/top/10.png",
    alt: "Vintage Poster of Valletta in Malta",
    title: "Valletta",
    description: "Malta",
    realSrc: "/real/10.mp4",
    realAlt: "Real images of Valletta",
  },
  {
    src: "/top/12.png",
    alt: "Vintage Poster of Ggantija temples in Gozo Island",
    title: "Ggantija",
    description: "Gozo Island",
    realSrc: "/real/12.mp4",
    realAlt: "Real images of Ggantija temples",
  },
]

export const posters: Poster[] = [
  {
    src: "/posters/1.png",
    alt: "Vintage Poster of The Azure Window in Gozo Island",
    title: "The azure window",
    description: "Gozo Island",
    realSrc: "/posters/1.png",
    realAlt: "The azure window",
  },
  {
    src: "/posters/2.png",
    alt: "Vintage Poster of Blue Lagoon in Comino Island",
    title: "Blue lagoon",
    description: "Comino Island",
    realSrc: "/posters/2.png",
    realAlt: "Blue lagoon",
  },
  {
    src: "/posters/3.png",
    alt: "Vintage Poster of From Coast to Coast in Maltese Islands",
    title: "From coast to coast",
    description: "Maltese Islands",
    realSrc: "/posters/3.png",
    realAlt: "From coast to coast",
  },
  {
    src: "/posters/4.png",
    alt: "Vintage Poster of Dive in Gozo Island",
    title: "Dive",
    description: "Gozo Island",
    realSrc: "/posters/4.png",
    realAlt: "Dive",
  },
  {
    src: "/posters/5.png",
    alt: "Vintage Poster of Ghajnsielem in Gozo Island",
    title: "Ghajnsielem",
    description: "Gozo Island",
    realSrc: "/posters/5.png",
    realAlt: "Ghajnsielem",
  },
  {
    src: "/posters/6.png",
    alt: "Vintage Poster of Go with the Flow in Gozo Island",
    title: "Go with the flow",
    description: "Gozo Island",
    realSrc: "/posters/6.png",
    realAlt: "Go with the flow",
  },
  {
    src: "/posters/7.png",
    alt: "Vintage Poster of Fishing Boats in Gozo Island",
    title: "Fishing boats",
    description: "Gozo Island",
    realSrc: "/posters/7.png",
    realAlt: "Fishing boats",
  },
  {
    src: "/posters/8.png",
    alt: "Vintage Poster of Marsalforn in Gozo Island",
    title: "Marsalforn",
    description: "Gozo Island",
    realSrc: "/posters/8.png",
    realAlt: "Marsalforn",
  },
  {
    src: "/posters/9.png",
    alt: "Vintage Poster of Cittadella in Gozo Island",
    title: "Cittadella",
    description: "Gozo Island",
    realSrc: "/posters/9.png",
    realAlt: "Cittadella",
  },
  {
    src: "/posters/10.png",
    alt: "Vintage Poster of Valletta in Malta",
    title: "Valletta",
    description: "Malta",
    realSrc: "/posters/10.png",
    realAlt: "Valletta 1",
  },
  {
    src: "/posters/11.png",
    alt: "Vintage Poster of Ramla Bay in Gozo Island",
    title: "Ramla Bay",
    description: "Gozo Island",
    realSrc: "/posters/11.png",
    realAlt: "Ramla Bay",
  },
  {
    src: "/posters/12.png",
    alt: "Vintage Poster of Sail away in Gozo Island",
    title: "Sail away",
    description: "Gozo Island",
    realSrc: "/posters/12.png",
    realAlt: "Sail away",
  },
  {
    src: "/posters/13.png",
    alt: "Vintage Poster of Saint John's in Gozo Island",
    title: "Saint John's",
    description: "Gozo Island",
    realSrc: "/posters/13.png",
    realAlt: "Saint John's",
  },
  {
    src: "/posters/14.png",
    alt: "Vintage Poster of The Cittadella in Gozo Island",
    title: "The Cittadella",
    description: "Gozo Island",
    realSrc: "/posters/14.png",
    realAlt: "The Cittadella",
  },
  {
    src: "/posters/15.png",
    alt: "Vintage Poster of ST George's Square in Gozo Island",
    title: "ST George's Square",
    description: "Gozo Island",
    realSrc: "/posters/15.png",
    realAlt: "ST George's Square",
  },
  {
    src: "/posters/16.png",
    alt: "Vintage Poster of Ta' Pinu in Gozo Island",
    title: "Ta' Pinu",
    description: "Gozo Island",
    realSrc: "/posters/16.png",
    realAlt: "Ta' Pinu",
  },
  {
    src: "/posters/17.png",
    alt: "Vintage Poster of Valletta in Malta",
    title: "Valletta",
    description: "Malta",
    realSrc: "/posters/17.png",
    realAlt: "Valletta Blue",
  },
  {
    src: "/posters/18.png",
    alt: "Vintage Poster of Valletta in Malta",
    title: "Valletta",
    description: "Malta",
    realSrc: "/posters/18.png",
    realAlt: "Valletta Red",
  },
  {
    src: "/posters/21.png",
    alt: "Vintage Poster of Xlendi in Gozo Island",
    title: "Xlendi",
    description: "Gozo Island",
    realSrc: "/posters/21.png",
    realAlt: "Xlendi Blue",
  },
  {
    src: "/posters/22.png",
    alt: "Vintage Poster of Xlendi in Gozo Island",
    title: "Xlendi",
    description: "Gozo Island",
    realSrc: "/posters/22.png",
    realAlt: "Xlendi Red",
  },
  {
    src: "/posters/23.png",
    alt: "Vintage Poster of Art in Gozo",
    title: "Art in Gozo",
    description: "Gozo Island",
    realSrc: "/posters/23.png",
    realAlt: "Art in Gozo",
  },
  {
    src: "/posters/24.png",
    alt: "Vintage Poster of Ggantija temples in Gozo Island",
    title: "Ggantija",
    description: "Gozo Island",
    realSrc: "/posters/24.png",
    realAlt: "Vintage Poster of Ggantija temples in Gozo Island",
  }
]