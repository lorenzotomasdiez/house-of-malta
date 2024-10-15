import PosterCarrousel from "@/components/PosterCarrousel";
export default function TopPosters() {
  return (
    <section className="container mx-auto bg-white space-y-5" id="top">
      <h2 className="text-2xl font-semibold px-4 lg:text-4xl text-center">Top Posters</h2>
      <p className="italic text-center text-neutral-400 text-sm">*scroll horizontally to see more posters</p>
      <PosterCarrousel />
    </section>
  )
}
