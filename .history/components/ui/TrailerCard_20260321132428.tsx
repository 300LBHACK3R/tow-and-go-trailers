import { Trailer } from "@/data/trailers";

type TrailerCardProps = {
  trailer: Trailer;
};

export function TrailerCard({ trailer }: TrailerCardProps) {
  return (
    <article className="surface overflow-hidden">
      <div className="relative aspect-[16/10] bg-zinc-900">
        <div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-semibold text-white">
          {trailer.status}
        </div>

        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#18181b,#09090b)] px-6 text-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Tow-N-Go
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              {trailer.shortName}
            </h3>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{trailer.name}</h3>
        <p className="mt-3 text-sm leading-7 text-zinc-300">{trailer.summary}</p>

        <div className="mt-5">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Key Specs
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            {trailer.specs.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}