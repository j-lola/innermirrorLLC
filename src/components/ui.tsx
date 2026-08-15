import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-6 md:px-10 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.2em] ${
        dark ? "text-gold" : "text-sage"
      }`}
    >
      <span className="h-px w-5 bg-gold" aria-hidden="true" />
      {children}
    </div>
  );
}

export function Serif({ children }: { children: ReactNode }) {
  return <span className="font-serif font-normal italic">{children}</span>;
}
