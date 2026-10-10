"use client";

import { useState } from "react";
import { LuChevronsRight, LuMail, LuMapPin, LuMessageSquare, LuPhone, LuUser } from "react-icons/lu";
import PageBanner from "../../shared/PageBanner";
import { site, type CourierContactData, type SectionProps } from "@/data";

const infoIcons: Record<string, typeof LuMail> = {
  mail: LuMail,
  phone: LuPhone,
  "map-pin": LuMapPin,
};

export default function Contact({
  data = site.contact,
  className = "",
}: SectionProps<CourierContactData>) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white">
      <PageBanner {...data.banner} />

      {/* Info cards */}
      <section className={` py-8 md:py-12 ${className}`}>
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6  sm:grid-cols-2 lg:grid-cols-3">
            {data.infoCards.map((card) => {
              const Icon = infoIcons[card.icon] ?? LuMail;
              const body = (
                <>
                  <span className="mx-auto flex h-[74px] w-[74px] items-center justify-center rounded-full bg-[#FDEBDD] text-[#F26A21]">
                    <Icon size={32} />
                  </span>
                  <h3 className="mt-3 text-[25px] font-semibold text-[#0B1B4D]">
                    {card.title}
                  </h3>
                  <p className="mt-0 text-[16px] leading-[1.6] text-[#5a6072]">
                    {card.value}
                  </p>
                </>
              );

              return card.href ? (
                <a
                  key={card.id}
                  href={card.href}
                  className="group rounded-xl border border-gray-300 bg-[#eceeee] px-6 py-2 text-center shadow-[0_12px_34px_rgba(11,27,77,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(11,27,77,0.14)]"
                >
                  {body}
                </a>
              ) : (
                <div
                  key={card.id}
                  className="rounded-xl bg-[#eceeee] border border-gray-300 px-6 py-2 text-center shadow-[0_12px_34px_rgba(11,27,77,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(11,27,77,0.14)]"
                >
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="bg-white py-8">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-12">
            {/* Map */}
            <div className="order-2 md:order-1 md:col-span-6">
              <iframe
                title="Our location map"
                src={data.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full rounded-2xl border-0 shadow-[0_12px_34px_rgba(11,27,77,0.1)] md:h-full md:min-h-[560px]"
              />
            </div>

            {/* Form */}
            <div className="order-1 md:order-2 md:col-span-6">
              <div className="mb-4 ">
                <div className="flex items-center  gap-2.5 text-[14px] font-bold uppercase tracking-[0.12em] text-[#F26A21]">
                  <span className="font-teko text-[18px]">{data.formHeader.badge}</span>
                  <span className="h-[2px] w-9 bg-[#F26A21]" />
                </div>
                <h2 className="mt-1 text-[36px] font-semibold leading-[1.1] tracking-tight text-[#0e1233] sm:text-[44px] lg:text-[52px]">
                  {data.formHeader.title.normal}{" "}
                  <span className="text-[#F26A21]">
                    {data.formHeader.title.highlighted}
                  </span>
                </h2>
                <p className="mx-auto mt-1 max-w-[760px] text-[16px] leading-[1.7] text-[#585e70]">
                  {data.formHeader.description}
                </p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className=""
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="relative">
                    <LuUser
                      size={22}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#F26A21]"
                    />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Name"
                      className="w-full rounded-lg border border-gray-200 bg-[#F7FAFD] py-3 pl-11 pr-4 text-[15px] text-[#0B1B4D] outline-none transition-colors placeholder:text-[#9aa0b3] focus:border-[#F26A21]"
                    />
                  </div>
                  <div className="relative">
                    <LuMail
                      size={22}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#F26A21]"
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Email Address"
                      className="w-full rounded-lg border border-gray-200 bg-[#F7FAFD] py-3 pl-11 pr-4 text-[15px] text-[#0B1B4D] outline-none transition-colors placeholder:text-[#9aa0b3] focus:border-[#F26A21]"
                    />
                  </div>
                  <div className="relative">
                    <LuPhone
                      size={22}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#F26A21]"
                    />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Phone Number"
                      className="w-full rounded-lg border border-gray-200 bg-[#F7FAFD] py-3 pl-11 pr-4 text-[15px] text-[#0B1B4D] outline-none transition-colors placeholder:text-[#9aa0b3] focus:border-[#F26A21]"
                    />
                  </div>
                  <div className="relative">
                    <LuMessageSquare
                      size={22}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#F26A21]"
                    />
                    <select
                      id="subject"
                      name="subject"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-gray-200 bg-[#F7FAFD] py-3 pl-11 pr-4 text-[15px] text-[#0B1B4D] outline-none transition-colors focus:border-[#F26A21]"
                    >
                      <option value="" disabled>
                        Subject
                      </option>
                      {data.subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="relative mt-5">
                  <LuMessageSquare
                    size={22}
                    className="pointer-events-none absolute left-4 top-4 text-[#F26A21]"
                  />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-lg border border-gray-200 bg-[#F7FAFD] py-3 pl-11 pr-4 text-[15px] text-[#0B1B4D] outline-none transition-colors placeholder:text-[#9aa0b3] focus:border-[#F26A21]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#F26A21] px-7 py-4 text-[14px] font-bold uppercase tracking-wide text-white shadow-[0_10px_24px_rgba(242,106,33,0.35)] transition-all hover:-translate-y-0.5 hover:brightness-110"
                >
                  Submit Now
                  <LuChevronsRight size={22} />
                </button>

                {submitted && (
                  <p className="mt-4 text-center text-[14px] font-semibold text-[#F26A21]">
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
