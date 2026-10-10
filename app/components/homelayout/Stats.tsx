"use client";

import { useEffect, useRef, useState } from "react";
import { LuGlobe, LuPackageCheck, LuSmile, LuUsers } from "react-icons/lu";
import { site, type CourierStatsData, type SectionProps } from "@/data";

// one icon per stat card, in the same order as data.items
const statIcons = [LuGlobe, LuUsers, LuSmile, LuPackageCheck];

export default function CourierStats1({
  data = site.stats,
  className = "",
}: SectionProps<CourierStatsData>) {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0); // 0 -> 1

  // when the section enters the viewport, count every number from 0 to its value
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / 2000, 1);
          setProgress(1 - Math.pow(1 - p, 3)); // easeOutCubic
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden my-8 md:my-12 py-12 md:py-20 lg:py-24 ${className}`}
      style={{
        backgroundImage: `url(${data.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 pt-10 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {data.items.map((s, i) => {
            const Icon = statIcons[i];
            return (
              <div
                key={s.id}
                className="relative rounded-md border-l-[3px] border-[#F26A21] bg-white px-4 pb-7 pt-[58px] text-center shadow-[0_14px_36px_rgba(11,27,77,0.1)]"
              >
                {/* semi-circle notch icon */}
                <div className="absolute shadow-lg rounded-full border-b border-orange-500 -top-[42px] left-1/2 h-[84px] w-[84px] -translate-x-1/2">
                  <span className="absolute inset-0 rounded-full bg-white" />
                  <span
                    className="absolute inset-0 rounded-full border-[3px] border-[#F26A21]"
                    style={{ clipPath: "inset(0 0 50% 0)" }}
                  />
                  <span className="absolute inset-[11px] flex items-center justify-center text-[#F26A21]">
                    <Icon size={40} />
                  </span>
                </div>

                <div className="text-[44px] font-bold leading-none text-[#0B1B4D] sm:text-[52px]">
                  {Math.round(s.number * progress)}
                  <span className="text-[#F26A21]">{s.suffix}</span>
                </div>
                <p className="mt-3 text-[16px] text-[#1f2127]">{s.label}</p>
                <span className="mx-auto mt-4 block h-[3px] w-8 rounded-full bg-[#F26A21]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}