import Link from "next/link";
import { cn } from "@/utils/cn";

type BaseProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
};

type LinkButtonProps = BaseProps & {
  href: string;
  onClick?: never;
};

type ActionButtonProps = BaseProps & {
  href?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type ButtonProps = LinkButtonProps | ActionButtonProps;

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className, disabled } = props;

  const baseStyles =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/40";

  const variantStyles =
    variant === "primary"
      ? "bg-[#d4af37] text-black hover:-translate-y-[2px] hover:bg-yellow-400 hover:shadow-[0_10px_30px_rgba(212,175,55,0.25)]"
      : "border border-white/15 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:-translate-y-[1px]";

  const disabledStyles =
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0";

  const classes = cn(baseStyles, variantStyles, disabledStyles, className);

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={cn(classes, disabled && "pointer-events-none opacity-50")}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={props.onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}