import { useEffect, useRef, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import type { BookingType } from "../lib/cal";

type CalEmbedProps = {
  calLink: string;
  namespace: BookingType;
  prefillNotes?: string;
};

type CalLayout = "column_view" | "month_view";

const COLUMN_MIN_WIDTH = 480;

const calUiConfig = {
  theme: "light" as const,
  hideEventTypeDetails: true,
  disableAutoScroll: true,
  cssVarsPerTheme: {
    light: {
      "cal-brand": "#A98244",
      "cal-brand-emphasis": "#8F6F3A",
      "cal-brand-text": "#FBF8F1",
      "cal-text": "#2C342A",
      "cal-text-emphasis": "#2C342A",
      "cal-text-subtle": "#8C8676",
      "cal-bg": "#FFFFFF",
      "cal-bg-emphasis": "#EFEADD",
      "cal-bg-subtle": "#FBF8F1",
      "cal-border": "#EFEADD",
      "cal-border-booker": "#EFEADD",
    },
    dark: {
      "cal-brand": "#A98244",
      "cal-brand-emphasis": "#8F6F3A",
      "cal-brand-text": "#FBF8F1",
      "cal-text": "#FBF8F1",
      "cal-text-emphasis": "#FBF8F1",
      "cal-text-subtle": "#8C8676",
      "cal-bg": "#2C342A",
      "cal-bg-emphasis": "#667056",
      "cal-bg-subtle": "#2C342A",
      "cal-border": "#667056",
      "cal-border-booker": "#667056",
    },
  },
};

function useEmbedLayout(containerRef: React.RefObject<HTMLDivElement | null>): CalLayout {
  const [layout, setLayout] = useState<CalLayout>("column_view");

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const update = () => {
      setLayout(element.clientWidth >= COLUMN_MIN_WIDTH ? "column_view" : "month_view");
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [containerRef]);

  return layout;
}

export function CalEmbed({ calLink, namespace, prefillNotes }: CalEmbedProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const layout = useEmbedLayout(shellRef);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace });
      cal("ui", { ...calUiConfig, layout });
    })();
  }, [namespace, layout]);

  return (
    <div
      ref={shellRef}
      className="cal-booking-shell h-[min(480px,72vh)] w-full min-w-0 overflow-y-auto overscroll-contain lg:h-[460px]"
    >
      <Cal
        key={`${namespace}-${layout}-${calLink}-${prefillNotes ?? ""}`}
        namespace={namespace}
        calLink={calLink}
        config={{
          theme: "light",
          layout,
          "ui.autoscroll": "false",
          ...(prefillNotes ? { notes: prefillNotes } : {}),
        }}
        className="cal-booking-embed min-h-full w-full"
        style={{ width: "100%", minHeight: "100%" }}
      />
    </div>
  );
}
