"use client";

import Link from "next/link";
import Image from "next/image";
import { site, type CourierTeamData, type SectionProps } from "@/data";
import ScrollReveal from "../../shared/ScrollReveal";

const NAVY = "#0e1233";
const ORANGE = "#F26A21";

export default function CourierTeam1({
  data = site.team,
  className = "",
}: SectionProps<CourierTeamData>) {
  return (
    <ScrollReveal as="section" direction="up" mobileDirection="right" className={`bg-[#F7FAFD] py-8 md:py-12 ${className}`}>
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto">
          <div className="inline-flex items-center justify-center gap-3 text-[14px] font-bold uppercase tracking-[0.12em] text-orange-600" >
            <span className="h-[2px] w-8 bg-orange-600"  />
            <span className="font-teko text-[20px]">{data.badge}</span>
            <span className="h-[2px] w-8 bg-orange-600" />
          </div>

          <h2 className="mt-1 text-[38px] sm:text-[48px] lg:text-[60px] font-bold leading-[1.15] tracking-tight" style={{ color: NAVY }}>
            {data.title.normal}{" "}
            <span style={{ color: ORANGE }}>{data.title.highlighted}</span>
          </h2>

          <p className="mt-1 text-[15px] sm:text-[18px] leading-[1.7] text-[#343741]">
            {data.description}
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.members.map((member, i) => (
            <ScrollReveal
              key={member.id}
              as="div"
              direction="up"
              index={i}
              staggerChildren={0.08}
            >
              <Link
                href={`/team/${member.slug}`}
                className="group block rounded-2xl bg-white p-0 shadow-[0_10px_30px_rgba(11,27,77,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(11,27,77,0.12)]"
              >
              {/* Member Image Container */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Member Meta Box */}
              <div className="p-4 pt-5 pb-3">
                <h3 className="text-[25px] font-semibold tracking-tight text-[#0B1B4D] transition-colors duration-200 group-hover:text-[#F26A21]">
                  {member.name}
                </h3>
                <p className="mt-1 text-[14px] font-medium text-[#373941]">
                  {member.role}
                </p>
                <div 
                  className="mt-3 h-[3px] w-8 rounded-full transition-all duration-300 group-hover:w-14"
                  style={{ backgroundColor: ORANGE }}
                />
              </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </ScrollReveal>
  );
}