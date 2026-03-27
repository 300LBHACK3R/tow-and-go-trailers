import { Container } from "@/components/ui/Container";

const items = [
  "Blacked-out premium fleet style",
  "Daily, weekly & monthly rental options",
  "Delivery & pickup available",
  "Accessories available on request",
];

export function TrustBar() {
  return (
    <section className="border-b border-white/10 bg-zinc-950/80">
      <Container className="py-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-zinc-200 transition hover:border-[#d4af37]/30 hover:bg-white/[0.06]"
            >
              <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}