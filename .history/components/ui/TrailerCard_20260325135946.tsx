import Image from "next/image";
import { Trailer } from "@/data/trailers";
import { Button } from "@/components/ui/Button";

type TrailerCardProps = {
  trailer: Trailer;
};

export function TrailerCard({ trailer }: TrailerCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <div className="relative h-[240px] overflow-hidden">
        <Image
          src={trailer.image}
          alt={trailer.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {trailer.status}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-semibold text-white">{trailer.shortName}</h3>
          <p className="mt-1 text-sm text-zinc-300">{trailer.summary}</p>
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
          Key Specs
        </h4>

        <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-300">
          {trailer.specs.slice(0, 4).map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Button href="/contact" className="w-full">
            Request This Trailer
          </Button>
        </div>
      </div>
    </article>
  );
}