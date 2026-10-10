"use client";

import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoIosAirplane } from "react-icons/io";
import PageBanner from "../../shared/PageBanner";

import { site, type CourierFaqPageData, type SectionProps } from "@/data";

export default function Faq({
  data = site.faqPage,
  className = "",
}: SectionProps<CourierFaqPageData>) {
  const [openId, setOpenId] = useState<string | null>(data.faqs[0]?.id ?? null);

  return (
    <div className="bg-white">
      <PageBanner {...data.banner} />

      <section className={`bg-white py-8 md:py-12 ${className}`}>
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-2.5 text-[14px] font-bold uppercase tracking-[0.12em] text-[#F26A21]">
              <span className="font-teko text-[18px]">{data.badge}</span>
              <span className="h-[2px] w-4 bg-[#F26A21]" />
              <div className="-rotate-30 -mt-2 text-xl">
                <IoIosAirplane className="text-orange-600" />
              </div>
            </div>
            <h1 className="mt-1 text-[36px] font-bold leading-[1.1] tracking-tight text-[#0e1233] sm:text-[44px] lg:text-[52px]">
              {data.title.normal}{" "}
              <span className="text-[#F26A21]">{data.title.highlighted}</span>
            </h1>
            <p className="mx-auto mt-1 max-w-[780px] text-[17px] leading-[1.7] text-[#404964]">
              {data.description}
            </p>
          </div>

          <div className="grid items-stretch gap-8 md:grid-cols-12">
            {/* Left column: help card with background image */}
            <div className="order-2 md:order-1 md:col-span-5">
              <div className="relative h-full min-h-[380px] overflow-hidden rounded-2xl shadow-[0_18px_45px_rgba(11,27,77,0.18)]">
                <img
                  src={data.leftCard.bgImage}
                  alt={data.leftCard.title}
                  className="absolute inset-0 h-full w-full object-center"
                />

                <div className="absolute top-0 flex h-full flex-col justify-start p-8 sm:p-10">
                  <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.18em] text-[#fcfaf8]">
                    <span className="font-teko text-[18px]">{data.leftCard.subtitle}</span>
                  </div>
                  <h2 className="mt-3 max-w-[300px] text-[36px] font-bold leading-[1.15] text-[#fcfaf8] sm:text-[54px]">
                    {data.leftCard.title}
                  </h2>
                  <p className="text-white pt-2 pl-2 max-w-xs">{data.leftCard.paragraph}</p>
                </div>
              </div>
            </div>

            {/* Right column: accordion */}
            <div className="order-1 md:order-2 md:col-span-7">
              <div className="space-y-3">
                {data.faqs.map((f) => {
                  const open = openId === f.id;
                  return (
                    <div
                      key={f.id}
                      className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                        open
                          ? "border-[#F26A21]/50 bg-[#ffead7] shadow-[0_12px_30px_rgba(242,106,33,0.12)]"
                          : "border-gray-200 bg-[#ffe5cf]"
                      }`}
                    >
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setOpenId(open ? null : f.id)}
                        className="flex w-full  cursor-pointer items-center gap-4 px-5 py-2 text-left"
                      >
                        <span
                          className={`flex h-8 min-w-8 items-center justify-center rounded-full text-[13px] font-bold transition-colors ${
                            open
                              ? "bg-[#F26A21] text-white"
                              : "bg-white text-[#0B1B4D] shadow-sm"
                          }`}
                        >
                          {f.id}
                        </span>
                        <span className="flex-1 font-teko text-[20px] font-semibold text-[#0B1B4D]">
                          {f.question}
                        </span>
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full text-white transition-colors ${
                            open ? "bg-[#F26A21]" : "bg-[#0B1B4D]"
                          }`}
                        >
                          {open ? <LuMinus size={14} /> : <LuPlus size={14} />}
                        </span>
                      </button>
                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden rounded-xl mx-5 mb-5">
                          <p className=" bg-white  p-3 text-[15px] leading-[1.7] text-[#303238]">
                            {f.answer}
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
    </div>
  );
}
