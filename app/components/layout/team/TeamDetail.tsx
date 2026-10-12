import { Check } from "lucide-react";
import Image from "next/image";
import type { CourierTeamMember } from "@/data";
import PageBanner from "@/app/components/shared/PageBanner";
import ScrollReveal from "@/app/components/shared/ScrollReveal";
import { site } from "@/data";

const responsibilities = [
  "Dedicated to Safe & On-Time Deliveries",
  "Strong Logistics & Industry Expertise",
  "Clear, Reliable Communication",
  "Committed to Customer Satisfaction",
  "Detail-Oriented Problem Solver",
  "Trusted Team Player",
];

interface TeamDetailProps {
  member: CourierTeamMember;
}

export default function TeamDetail({ member }: TeamDetailProps) {
  const firstName = member.name.split(" ")[0];

  const firstParagraph = `${member.name} serves as our ${member.role} and plays a key role in keeping every shipment safe, on schedule, and handled with care. With a strong focus on reliability and efficiency, ${firstName} works closely with our fleet and logistics teams to deliver seamless transportation solutions for every client.`;

  const secondParagraph = `From coordinating daily routes and monitoring deliveries to supporting customers at every stage, ${firstName} brings dedication, precision, and a problem-solving mindset to the role. This commitment helps our business maintain the high standards of service our clients depend on.`;

  return (
    <>
      <PageBanner
        title="Team Detail"
        backgroundImage={site.aboutPage.banner.backgroundImage}
        className="min-h-[290px]"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Team Detail" },
        ]}
      />

      <ScrollReveal as="main" direction="left" mobileDirection="up" className="bg-[#f7f9fc] px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <article className="mx-auto max-w-[1320px] bg-white px-4 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10">
          <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-2 lg:gap-10">
            {/* Person Image */}
            <ScrollReveal as="div" direction="left" mobileDirection="up" className="relative overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={member.image}
                alt={member.name}
                width={800}
                height={1000}
                className="aspect-[4/5] h-full w-full object-cover object-top lg:aspect-auto"
              />
            </ScrollReveal>

            {/* Person Details */}
            <ScrollReveal as="div" direction="right" mobileDirection="up" className="flex flex-col">
              {/* Name - shown below image on mobile/tablet, top of right column on desktop */}
              <h2 className="text-center text-3xl font-extrabold leading-tight text-[#0b1b4d] sm:text-4xl lg:text-left lg:text-[42px]">
                {member.name}
              </h2>
              <p className="mt-2 text-center text-lg font-semibold text-[#f04b16] sm:text-xl lg:text-left">
                {member.role}
              </p>
              <span className="mx-auto mt-3 block h-[3px] w-14 rounded-full bg-[#f04b16] lg:mx-0" />

              <p className="mt-5 text-base leading-[1.7] text-[#737f91] sm:text-lg">
                {firstParagraph}
              </p>
              <p className="mt-4 text-base leading-[1.7] text-[#737f91] sm:text-lg">
                {secondParagraph}
              </p>

              <ul className="mt-5 space-y-2.5">
                {responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 text-base text-[#737f91] sm:text-lg"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#f04b16] text-[#f04b16]">
                      <Check size={15} strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </article>
      </ScrollReveal>
    </>
  );
}
