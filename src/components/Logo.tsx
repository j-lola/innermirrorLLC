type LogoProps = {
  variant?: "coaching" | "circle";
  className?: string;
};

const sources = {
  coaching: "/logo-coaching-stacked.svg",
  circle: "/logo-circle-stacked.svg",
} as const;

export function Logo({ variant = "coaching", className = "h-8 w-auto" }: LogoProps) {
  return (
    <img
      src={sources[variant]}
      alt="Inner Mirror"
      className={className}
      decoding="async"
    />
  );
}
