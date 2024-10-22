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
    alt: "The azure window",
    title: "The azure window",
    description: "Gozo Island",
    realSrc: "/top/1.mp4",
    realAlt: "The azure window real",
  },
  {
    src: "/posters/2.png",
    alt: "Blue lagoon",
    title: "Blue lagoon",
    description: "Comino Island",
    realSrc: "/posters/2.png",
    realAlt: "Blue lagoon",
  },
  {
    src: "/posters/3.png",
    alt: "From coast to coast",
    title: "From coast to coast",
    description: "Maltese Islands",
    realSrc: "/posters/3.png",
    realAlt: "From coast to coast",
  },
  {
    src: "/posters/4.png",
    alt: "Dive",
    title: "Dive",
    description: "Gozo Island",
    realSrc: "/posters/4.png",
    realAlt: "Dive",
  },
  {
    src: "/posters/5.png",
    alt: "Ghajnsielem",
    title: "Ghajnsielem",
    description: "Gozo Island",
    realSrc: "/posters/5.png",
    realAlt: "Ghajnsielem",
  },
  {
    src: "/posters/6.png",
    alt: "Go with the flow",
    title: "Go with the flow",
    description: "Gozo Island",
    realSrc: "/posters/6.png",
    realAlt: "Go with the flow",
  },
  {
    src: "/posters/7.png",
    alt: "Phising boats",
    title: "Phising boats",
    description: "Gozo Island",
    realSrc: "/posters/7.png",
    realAlt: "Phising boats",
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
    title: "Phising boats",
    description: "Gozo Island",
    realSrc: "/posters/7.png",
    realAlt: "Phising boats",
  },
  {
    src: "/posters/8.png",
    alt: "Vintage Poster of Marsalforn in Gozo Island",
    title: "Marlsarforn",
    description: "Gozo Island",
    realSrc: "/posters/8.png",
    realAlt: "Marlsarforn",
  },
  {
    src: "/posters/9.png",
    alt: "Vintage Poster of Citadella in Gozo Island",
    title: "Citadella",
    description: "Gozo Island",
    realSrc: "/posters/9.png",
    realAlt: "Citadella",
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
    alt: "Vintage Poster of Saint Jhon's in Gozo Island",
    title: "Saint Jhon's",
    description: "Gozo Island",
    realSrc: "/posters/13.png",
    realAlt: "Saint Jhon's",
  },
  {
    src: "/posters/14.png",
    alt: "Vintage Poster of The Cittadella in Gozo Island",
    title: "The azure window",
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
  }
]