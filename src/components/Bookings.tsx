import { useSearchParams } from "react-router-dom";
import { Reveal } from "./Reveal";
import { Container, Eyebrow, Serif } from "./ui";
import { CalEmbed } from "./CalEmbed";
import { getCalLinkForBooking } from "../lib/cal";
import { BOOKING_DETAILS, BOOKING_TYPES, parseBookingType, type BookingType } from "../lib/booking";

export function Bookings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeType = parseBookingType(searchParams.get("booking"));
  const details = BOOKING_DETAILS[activeType];

  function selectType(type: BookingType) {
    if (type === activeType) return;
    if (type === "discovery") {
      setSearchParams({}, { replace: true });
      return;
    }
    setSearchParams({ booking: type }, { replace: true });
  }

  return (
    <section id="bookings" className="py-28 md:py-36">
      <Container className="max-w-[1280px]">
        <Reveal>
          <Eyebrow>Bookings</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-[20ch] font-display text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.05] tracking-tight">
            Let&apos;s meet your <Serif>reflection.</Serif>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-[560px] text-[16.5px] text-ink/65">{details.intro}</p>
        </Reveal>

        <Reveal delay={0.12} className="mt-8 flex flex-wrap gap-3">
          {BOOKING_TYPES.map((type) => {
            const option = BOOKING_DETAILS[type];
            const isActive = type === activeType;
            return (
              <button
                key={type}
                type="button"
                onClick={() => selectType(type)}
                className={`rounded-full border px-5 py-2.5 font-sans text-[13px] font-semibold transition-colors duration-200 ${
                  isActive
                    ? "border-gold bg-gold text-bone"
                    : "border-cream bg-white text-forest hover:border-gold/40 hover:bg-cream/50"
                }`}
              >
                {option.label}
                {option.price ? (
                  <span className={`ml-2 font-normal ${isActive ? "text-bone/85" : "text-stone"}`}>{option.price}</span>
                ) : null}
              </button>
            );
          })}
        </Reveal>

        <Reveal
          delay={0.15}
          className="mt-10 overflow-hidden rounded-[28px] shadow-[0_32px_70px_-30px_rgba(44,52,42,0.1)]"
        >
          <div className="bg-sage px-8 py-8 md:px-10 md:py-10">
            <h3 className="font-display text-[24px] font-semibold text-bone">{details.panelTitle}</h3>
            <p className="mt-3 max-w-[640px] text-[14.5px] leading-relaxed text-bone/85">{details.panelDescription}</p>
            <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
              {details.steps.map((step, i) => (
                <li key={step} className="flex gap-4 text-[14px] text-bone/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/15 font-display text-[11px] text-gold">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 bg-white p-4 md:p-6">
            <CalEmbed calLink={getCalLinkForBooking(activeType)} namespace={activeType} key={activeType} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
