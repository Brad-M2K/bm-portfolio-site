"use client";

import React, { useEffect, useMemo, useState } from "react";

type Section = { id: string; label: string };

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

export const FloatingTimeline = ({ sections }: { sections: Section[] }) => {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionRects, setSectionRects] = useState<
    { top: number; bottom: number }[]
  >([]);
  const [dotPositions, setDotPositions] = useState<number[]>([]);
  const [firstTop, setFirstTop] = useState(0);
  const [totalSpan, setTotalSpan] = useState(1);

  useEffect(() => {
    const measure = () => {
      const rects = sections
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean)
        .map((el) => {
          const rect = el!.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const height = rect.height;
          return { top, bottom: top + height };
        });

      if (!rects.length) return;

      const first = rects[0].top;
      const last = rects[rects.length - 1].bottom;
      const span = Math.max(1, last - first);

      setFirstTop(first);
      setTotalSpan(span);
      setSectionRects(rects);
      setDotPositions(rects.map((r) => ((r.top - first) / span) * 100));
    };

    measure();
    const id = window.setTimeout(measure, 150);
    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("resize", measure);
    };
  }, [sections]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRects.length) return;
      const scrollTop = window.scrollY;
      const viewCursor = scrollTop + window.innerHeight * 0.35;

      setProgress(
        clamp01(totalSpan > 0 ? (viewCursor - firstTop) / totalSpan : 0)
      );

      let idx = sectionRects.length - 1;
      for (let i = 0; i < sectionRects.length; i += 1) {
        if (viewCursor < sectionRects[i].bottom) {
          idx = i;
          break;
        }
      }
      setActiveIndex(idx);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [firstTop, sectionRects, totalSpan]);

  return (
    <aside className="relative flex items-start justify-center">
      <div
        className="relative z-50 w-24 flex items-stretch justify-center h-[calc(100vh-10rem)] pb-16 md:h-[calc(100vh-6rem)] md:pb-0"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10 rounded-full" />
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[3px] rounded-full bg-gradient-to-b from-purple-500 via-blue-500 to-teal-400"
          style={{ height: `${progress * 100}%` }}
        />
        <div className="relative w-full h-full">
          {dotPositions.map((pos, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={idx}
                className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                style={{ top: `${pos}%` }}
              >
                <div
                  className={`grid place-items-center rounded-full border transition-all duration-200 ${
                    isActive
                      ? "h-7 w-7 border-white/70 bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/30"
                      : "h-6 w-6 border-white/30 bg-black/60"
                  }`}
                >
                  <div
                    className={`rounded-full ${
                      isActive ? "h-3.5 w-3.5 bg-white" : "h-3 w-3 bg-white/60"
                    }`}
                  />
                </div>
                <span className="text-[10px] md:text-xs text-white/60 font-semibold whitespace-nowrap text-center">
                  {sections[idx]?.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
