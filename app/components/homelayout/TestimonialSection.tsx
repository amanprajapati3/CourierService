"use client";

import { useEffect, useState } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { site, type CourierTestimonialData, type SectionProps } from "@/data";

export default function CourierTestimonial1({
  data = site.testimonial,
  className = "",
}: SectionProps<CourierTestimonialData>) {
  const items = data.testimonialItems;
  // dots follow the design (3); slides cycle through the available items
  const total = Math.max(items.length, data.carousel.totalDots);
  const [active, setActive] = useState(Math.max(0, data.carousel.activeDot - 1));
  const [paused, setPaused] = useState(false);

  const next = () => setActive((i) => (i + 1) % total);
  const prev = () => setActive((i) => (i - 1 + total) % total);

  useEffect(() => {
    if (paused || total < 2) return;
    const t = setInterval(() => setActive((i) => (i + 1) % total), 5000);
    return () => clearInterval(t);
  }, [paused, total]);

  return (
    <section className={`relative overflow-hidden  bg-[#F4F8FC] ${className}`}>
      {/* slanted truck image, right side on desktop */}
      <div className="absolute  inset-y-0 right-0 hidden w-[46%] lg:block">
        <div
          className="absolute hidden lg:block inset-0 bg-[#F26A21]"
          style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0 100%)" }}
        />
        <img
          src={data.image.src}
          alt={data.image.alt}
          className="absolute inset-0 hidden lg:block  h-full w-full object-cover"
          style={{ clipPath: "polygon(17% 0, 100% 0, 100% 100%, 1% 100%)" }}
        />
      </div>

      <div className="relative mx-auto  w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="lg:py-14 lg:w-[56%] lg:pr-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#da5107]">
                <span className="font-teko text-[18px]">{data.badge}</span>
                <span className="h-[2px] w-9 bg-[#F26A21]" />
              </div>
              <h2 className="mt-1 text-[36px] font-bold leading-[1.1] tracking-tight text-[#0B1B4D] sm:text-[44px] lg:text-[52px]">
                {data.title.normal}
                <br />
                <span className="text-[#F26A21]">{data.title.highlighted}</span>
              </h2>
            </div>

            <div className="mt-8 hidden items-center gap-3 sm:flex">
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
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#F26A21] text-white shadow-[0_6px_16px_rgba(242,106,33,0.4)] transition-all hover:brightness-110"
              >
                <LuChevronRight size={20} />
              </button>
            </div>
          </div>

          <p className="mt-1 max-w-[560px] text-[16px] leading-[1.7] text-[#4a5470]">
            {data.desc}
          </p>

          {/* card slider */}
          <div
            className="relative mt-8 overflow-hidden rounded-xl bg-white shadow-[0_14px_40px_rgba(11,27,77,0.1)]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {Array.from({ length: total }).map((_, i) => {
                const t = items[i % items.length];
                return (
                  <div key={i} className="w-full shrink-0 p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="h-20 w-20 rounded-full border border-[#F26A21] object-cover"
                        />
                        <div>
                          <h4 className="text-[22px] font-bold text-[#0B1B4D]">
                            {t.name}
                          </h4>
                          <p className="text-[15px] font-semibold text-[#F26A21]">
                            {t.designation}
                          </p>
                        </div>
                      </div>
                      {/* <div className="flex gap-0.5 text-[#F26A21]">
                        {Array.from({ length: t.rating }).map((_, s) => (
                          <FaStar key={s} size={14} />
                        ))}
                      </div> */}
                    </div>
                    <p className="mt-2 pr-10 text-[15px] leading-[1.8] text-[#2b3141] sm:text-[15px]">
                      {t.quote}
                    </p>
                    <FaQuoteRight size={38} className="-mt-4 ml-auto text-[#F26A21]/80" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* dots */}
          <div className="mt-6 flex items-center justify-center gap-2 pl-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-[6px] rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-[#F26A21]" : "w-4 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* image on mobile / tablet */}
      <div className="relative h-60 sm:h-80 lg:hidden">
        <div
          className="absolute inset-0 bg-[#F26A21]"
          style={{ clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0 100%)" }}
        />
        <img
          src={data.image.src}
          alt={data.image.alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: "polygon(0 16%, 100% 4%, 100% 100%, 0 100%)" }}
        />
      </div>
    </section>
  );
}