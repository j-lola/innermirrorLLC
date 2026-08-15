type NoticeMarkProps = {
  className?: string;
};

export function NoticeMark({ className = "h-3.5 w-3.5 shrink-0 text-gold" }: NoticeMarkProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" fill="none">
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.15" />
      <path d="M8 4.6v4.15" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <circle cx="8" cy="11.15" r="0.7" fill="currentColor" />
    </svg>
  );
}
