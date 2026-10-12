"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LuArrowRight, LuGlobe, LuPackage } from "react-icons/lu";
import { site, type CourierAboutData, type SectionProps } from "@/data";
import ScrollReveal from "../shared/ScrollReveal";

// one icon per feature card, in the same order as data.features
const featureIcons = [LuGlobe, LuPackage];

export default function CourierAbout1({
  data = site.about,
  className = "",
}: SectionProps<CourierAboutData>) {
  const ref = useRef<HTMLDivElement>(null);
  const [years, setYears] = useState(0);

  // count the experience number from 0 when the images come into view
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
          setYears(Math.round(data.experienceBadge.number * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [data.experienceBadge.number]);

  return (
    <ScrollReveal
      as="section"
      direction="up"
      mobileDirection="left"
      className={`bg-white pb-8 md:pb-12  ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* images */}
          <ScrollReveal
            as="div"
            direction="left"
            mobileDirection="up"
            className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[520px] lg:h-[580px]"
            ref={ref}
          >
            <span className="absolute -left-3 top-0 h-full w-[8px] rounded-full bg-[#F26A21]" />

            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={800}
              height={1200}
              className="absolute left-0 top-0 h-full w-[54%] rounded-sm object-cover shadow-lg"
            />

            <div className="absolute right-12 top-1 rounded-xl border-l-8 border-l-orange-600 w-[44%] bg-white p-4 shadow-[0_10px_30px_rgba(11,27,77,0.12)] sm:p-5">
              <div className="text-[35px] font-extrabold leading-none text-[#0B1B4D] sm:text-[45px]">
                {years}
                {data.experienceBadge.suffix}
              </div>
              <p className="mt-1 text-[13px] font-bold text-[#F26A21] sm:text-[17px]">
                {data.experienceBadge.label}
              </p>
              <p className="text-[11px] font-semibold text-gray-500 sm:text-[14px]">
                {data.experienceBadge.subLabel}
              </p>
            </div>

            <Image
              src={data.secondaryImage.src}
              alt={data.secondaryImage.alt}
              width={800}
              height={800}
              className="absolute bottom-0 right-0 sm:-right-9 sm:h-[73%] h-[62%] w-[50%] rounded-lg object-cover shadow-xl"
            />
          </ScrollReveal>

          {/* content */}
          <ScrollReveal as="div" direction="right" mobileDirection="up">
            <div className="flex items-center gap-2.5 text-[18px] font-bold uppercase tracking-[0.12em] text-[#F26A21]">
              <span className="font-teko text-[18px]">{data.badge}</span>
              <span className="h-[2px] w-9 bg-[#F26A21]" />
            </div>

            <h2 className="mt-3 text-[36px] font-bold leading-[1.15] tracking-tight text-[#0B1B4D] sm:text-[44px] lg:text-[52px]">
              {data.title.normal}
              <br />
              <span className="text-[#F26A21]">{data.title.highlighted}</span>
            </h2>

            <p className="mt-5 text-[14px] leading-[1.8] text-[#292c33] sm:text-[15px]">
              {data.paragraph}
            </p>

            <div className="mt-7 space-y-4">
              {data.features.map((f, i) => {
                const Icon = featureIcons[i];
                return (
                  <div
                    key={f.id}
                    className="flex items-center gap-4 rounded-md border-l-[4px] border-[#F26A21] bg-white p-4 shadow-[0_8px_26px_rgba(11,27,77,0.08)] sm:p-5"
                  >
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-[#F26A21]/40 bg-[#eb590a] text-[#fcfcfc]">
                      <Icon size={34} />
                    </span>
                    <div>
                      <h3 className="text-[20px] font-semibold text-[#06102e]">{f.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-[#333947]">
                        {f.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href={data.button.href}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#F26A21] px-6 py-3.5 text-[12px] font-bold uppercase tracking-wide text-white shadow-[0_8px_20px_rgba(242,106,33,0.35)] transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              {data.button.label}
              <LuArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </ScrollReveal>
  );
}