"use client";

import { useCallback, useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { site, type CourierServicesData, type SectionProps } from "@/data";
import ServiceCard from "../shared/ServiceCard";

export default function CourierServices1({
  data = site.services,
  className = "",
}: SectionProps<CourierServicesData>) {
  const items = data.services;
  const [perView, setPerView] = useState(4);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // cards per view: 1 (mobile) / 2 (tablet) / 4 (desktop)
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 4 : w >= 640 ? 2 : 1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const max = Math.max(0, items.length - perView);
  const active = Math.min(index, max);

  const next = useCallback(() => setIndex((i) => (i >= max ? 0 : i + 1)), [max]);
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? max : i - 1)), [max]);

  // autoplay, only when there is something to slide
  useEffect(() => {
    if (max === 0 || paused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [max, paused, next]);

  return (
    <section className={`bg-[#F7FAFD] py-12 md:py-16 ${className}`}>
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 text-[14px] font-bold uppercase tracking-[0.12em] text-[#F26A21]">
              <span className="font-teko text-[18px]">{data.badge}</span>
              <span className="h-[2px] w-9 bg-[#F26A21]" />
            </div>
            <h2 className="mt-3 text-[36px] font-bold leading-[1.1] tracking-tight text-[#0e1233] sm:text-[44px] lg:text-[52px]">
              {data.title.normal}
              <br />
              <span className="text-[#F26A21]">{data.title.highlighted}</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={prev}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 transition-colors hover:border-[#F26A21] hover:text-[#F26A21]"
            >
              <LuChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={next}
              className="flex h-10 w-10 items-center cursor-pointer justify-center rounded-md bg-[#F26A21] text-white shadow-[0_6px_16px_rgba(242,106,33,0.4)] transition-all hover:brightness-110"
            >
              <LuChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          className="-mx-3 mt-10 overflow-hidden pb-8 pt-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${active * (100 / perView)}%)` }}
          >
            {items.map((s) => (
              <div key={s.id} className="px-3" style={{ flex: `0 0 ${100 / perView}%` }}>
                <ServiceCard service={s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
