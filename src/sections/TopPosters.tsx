import PosterCarrousel from "@/components/PosterCarrousel";
export default function TopPosters() {
  return (
    <section className="container mx-auto space-y-5" id="top">
      <h2 className="text-2xl font-semibold px-4 lg:text-4xl text-center text-white">Top Posters</h2>
      <div>
        <p className="italic text-center text-neutral-400 text-sm">*scroll horizontally to see more posters</p>
        <p className="italic text-center text-neutral-400 text-sm lg:hidden">*double click on the poster to enter</p>
      </div>
      <PosterCarrousel />
    </section>
  )
}
