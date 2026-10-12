import PageBanner from "../../shared/PageBanner";
import ScrollReveal from "../../shared/ScrollReveal";
import Image from "next/image";
import { site } from "@/data";

const NAVY = "#0B1B4D";
const ORANGE = "#F26A21";

export default function About() {
  const data = site.aboutPage;

  return (
    <div className="min-h-screen bg-white">
      {/* Reusable Page Banner */}
      <PageBanner {...data.banner} />

      {/* Main About Section */}
      <ScrollReveal as="section" direction="up" mobileDirection="left" className="py-8 md:py-12 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 ">
            
            {/* Left Side: Image Composition with Orange Framing & Overlays */}
            <ScrollReveal
              as="div"
              direction="left"
              mobileDirection="up"
              className="lg:col-span-6 relative lg:max-w-[580px]"
            >
              <div className="relative pl-6 pt-6 pb-6 mr-2  ">
                
                {/* Orange Left Border Accent Frame */}
                <div 
                  className="absolute bg-orange-600 left-0 top-16 bottom-0 w-[4px] h-[83%] hidden sm:block" 

                />
                <div 
                  className="absolute bg-orange-600 rounded-full -right-1 top-10 bottom-0 w-[4px] h-[83%] hidden sm:block" 

                />
                <div className="w-[50px] left-2 top-11 h-[100px]  -rotate-[35deg] absolute bg-orange-600">

                </div>
                {/* Main Driver / Warehouse Image */}
                <div className="relative p-2 shadow-xl rounded-2xl overflow-hidden  h-[380px] sm:h-[490px] w-full">
                  <Image
                    src={data.mainImage}
                    alt="Courier delivery service"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="rounded-2xl object-cover"
                  />
                </div>

                {/* Top-Left Floating Experience Badge */}
                <div className="absolute top-16 left-0 sm:-left-4 bg-white shadow-[0_10px_30px_rgba(11,27,77,0.12)] border-4 border-orange-600 px-6 py-4 max-w-[150px] text-center z-20">
                  <span className="block text-[32px] sm:text-[36px] font-extrabold text-[#0B1B4D] leading-none">
                    {data.experienceBadge.number}
                  </span>
                  <span className="block mt-1 text-[12px] sm:text-[13px] font-semibold text-[#6b7390] uppercase tracking-wider font-teko">
                    {data.experienceBadge.label}
                  </span>
                </div>

                {/* Bottom-Right Overlapping Circular Badge */}
                <div className="absolute -bottom-8 right-2  lg:-right-10 h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] rounded-full border-[6px] border-white shadow-[0_15px_40px_rgba(11,27,77,0.2)] overflow-hidden z-20 bg-white">
                  <Image
                    src={data.circularImage}
                    alt="Logistics transport"
                    fill
                    sizes="180px"
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>
            </ScrollReveal>

            {/* Right Side: Content & Typography */}
            <ScrollReveal
              as="div"
              direction="right"
              mobileDirection="up"
              className="lg:col-span-6 mt-6 lg:mt-6"
            >
              
              {/* Badge */}
              <div className="flex items-center gap-2.5 text-[14px] font-bold uppercase tracking-[0.12em] text-orange-600">
                <span className="font-teko text-[18px]">{data.badge}</span>
                <span className="h-[2px] w-8 bg-orange-600"  />
              </div>

              {/* Main Heading */}
              <h1 className="mt-1 text-[38px] sm:text-[48px] lg:text-[58px] font-bold leading-[1.1] tracking-tight" style={{ color: NAVY }}>
                {data.title.prefix}{" "}
                <span style={{ color: ORANGE }}>{data.title.highlight}</span>{" "}
                {data.title.suffix}
              </h1>

              {/* Paragraphs */}
              <div className="mt-6 space-y-2">
                {data.paragraphs.map((para, index) => (
                  <p key={index} className="text-[15px] sm:text-[17px] leading-[1.75] text-[#292c38]">
                    {para}
                  </p>
                ))}
              </div>

            </ScrollReveal>

          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}