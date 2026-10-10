"use client";

import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { site, type CourierFaqData, type SectionProps } from "@/data";

export default function CourierFaq1({
  data = site.faq,
  className = "",
}: SectionProps<CourierFaqData>) {
  const [openId, setOpenId] = useState<number | null>(data.faqs[0]?.id ?? null);

  return (
    <section className={`bg-[#F7FAFD] py-8 md:py-12 ${className}`}>
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-14">
          {/* image */}
          <div className="relative order-2 md:order-1">
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="relative h-[320px] w-full rounded-[18px]  object-cover shadow-xl sm:h-[420px] lg:h-[480px]"
            />
          </div>

          {/* accordion */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2.5 text-[18px] font-bold uppercase tracking-[0.12em] text-[#fd5a02]">
              <span className="font-teko text-[18px]">{data.badge}</span>
              <span className="h-[2px] w-9 bg-[#f55804]" />
            </div>
            <h2 className="mt-1 text-[36px] font-bold leading-[1.1] tracking-tight text-[#0B1B4D] sm:text-[44px] lg:text-[54px]">
              {data.title.normal}
              <br />
              <span className="text-[#F26A21]">{data.title.highlighted}</span>
            </h2>
            <p className="mt-1 text-[16px] max-w-lg leading-[1.7] text-[#2a2e38]">{data.desc}</p>

            <div className="mt-7 space-y-3">
              {data.faqs.map((f) => {
                const open = openId === f.id;
                return (
                  <div
                    key={f.id}
                    className={`rounded-md border transition-colors duration-300 ${
                      open
                        ? "border-[#F26A21]/50 bg-[#FFF6F0]"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenId(open ? null : f.id)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-[19px] font-teko font-semibold text-[#0B1B4D] ">
                        {f.question}
                      </span>
                      <span className={open ? "text-[#F26A21]" : "text-[#0B1B4D]"}>
                        {open ? <LuMinus size={18} /> : <LuPlus size={18} />}
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-[15px] leading-[1.4] text-[#303238]">
                          {f.answer ?? ""}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}