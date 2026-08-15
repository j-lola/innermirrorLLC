import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "outline-dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-sans text-sm font-semibold tracking-tight transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-bone shadow-[0_10px_30px_-12px_rgba(169,130,68,0.45)] hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-[0_18px_38px_-14px_rgba(143,107,52,0.45)] active:translate-y-0",
  dark: "bg-forest text-bone hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(44,52,42,0.35)] active:translate-y-0",
  outline:
    "border border-sage/35 bg-bone text-forest hover:border-sage hover:bg-white",
  "outline-dark":
    "border border-cream bg-white text-forest hover:border-sage/50 hover:bg-bone",
};

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button({ variant = "primary", className = "", children, ...props }: ButtonAsLink | ButtonAsButton) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
