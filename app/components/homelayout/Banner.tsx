import { LuTruck, LuShieldCheck, LuGlobe } from "react-icons/lu";
import Image from "next/image";
import { site, type CourierBannerData, type SectionProps } from "@/data";
import ScrollReveal from "../shared/ScrollReveal";

// one icon per highlight card, in the same order as data.highlights
const highlightIcons = [LuTruck, LuShieldCheck, LuGlobe];

export default function CourierBanner1({
  data = site.banner,
  className = "",
}: SectionProps<CourierBannerData>) {
  return (
    <ScrollReveal
      as="section"
      direction="left"
      mobileDirection="up"
      className={`relative overflow-hidden bg-[#EAF3FB] ${className}`}
    >
      <Image
        src={data.image.src}
        alt={data.image.alt}
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="object-cover object-[72%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/10 sm:via-white/55 lg:from-white/90 lg:via-white/35 lg:to-transparent" />

      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-16">
        <div className="flex min-h-[460px] flex-col justify-center py-14 sm:min-h-[520px] lg:min-h-[600px] lg:py-20">
          <ScrollReveal
            as="div"
            direction="left"
            className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#0B1B4D]"
          >
            <span className="h-[2px] w-9 bg-[#F26A21]" />
            <span className="font-teko text-[18px]">{data.badge}</span>
          </ScrollReveal>

          <ScrollReveal
            as="p"
            direction="right"
            className="mt-1 text-[42px] font-bold leading-[0.9] text-[#052742] sm:text-[58px] lg:text-[72px]"
          >
            {data.title.normal}
            <br />
            <span className="text-[#F26A21]">{data.title.highlighted}</span>
          </ScrollReveal>

          <ScrollReveal
            as="p"
            direction="left"
            className="mt-5 max-w-[500px] text-[15px] leading-[1.7] font-semibold text-[#121827] sm:text-[16px]"
          >
            {data.desc}
          </ScrollReveal>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            {data.highlights.map((h, i) => {
              const Icon = highlightIcons[i];
              return (
                <ScrollReveal
                  key={h.id}
                  as="div"
                  direction="up"
                  index={i}
                  staggerChildren={0.1}
                  className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-[0_8px_24px_rgba(11,27,77,0.12)]"
                >
                  <Icon size={40} className="text-[#F26A21]" />
                  <span className="max-w-[70px] text-[15px] font-bold leading-tight text-[#052742]">
                    {h.title}
                  </span>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
