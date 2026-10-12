import PageBanner from "../../shared/PageBanner";
import ScrollReveal from "../../shared/ScrollReveal";
import ServiceCard from "../../shared/ServiceCard";
import { site } from "@/data";

export default function Services() {
  const data = site.services;

  return (
    <div className="bg-white">
      <PageBanner {...data.banner} />

      <ScrollReveal as="section" direction="right" mobileDirection="up" className="bg-[#F7FAFD] py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2.5 text-[14px] font-bold uppercase tracking-[0.12em] text-[#F26A21]">
              <span className="h-[2px] w-9 bg-[#F26A21]" />
              <span className="font-teko text-[18px]">{data.pageIntro.badge}</span>
              <span className="h-[2px] w-9 bg-[#F26A21]" />
            </div>

            <h1 className="mt-3 text-[36px] font-bold leading-[1.1] tracking-tight text-[#0e1233] sm:text-[44px] lg:text-[52px]">
              {data.pageIntro.title.normal}{" "}
              <span className="text-[#F26A21]">{data.pageIntro.title.highlighted}</span>
            </h1>

            <div className="mx-auto mt-4 max-w-[820px] space-y-1">
              {data.pageIntro.paragraph.map((line, i) => (
                <p key={i} className="text-[16px] leading-[1.7] text-[#292d3a]">
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Service Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
