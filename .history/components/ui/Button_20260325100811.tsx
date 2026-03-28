import Link from "next/link";
import { cn } from "@/utils/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-[#d4af37]/40",
        variant === "primary"
          ? "bg-[#d4af37] text-black shadow-[0_6px_24px_rgba(212,175,55,0.25)] hover:-translate-y-[1px] hover:bg-yellow-400"
          : "border border-white/15 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:-translate-y-[1px]",
        className
      )}
    >
      {children}
    </Link>
  );
}