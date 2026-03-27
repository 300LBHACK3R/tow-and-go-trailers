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
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-200",
        variant === "primary"
          ? "bg-[#d4af37] text-black hover:translate-y-[-1px] hover:bg-yellow-400"
          : "border border-white/15 bg-white/5 text-white hover:bg-white/10",
        className
      )}
    >
      {children}
    </Link>
  );
}