import { LuGlobe, LuShieldCheck, LuTruck, LuUsers } from "react-icons/lu";
import { site, type CourierChooseData, type SectionProps } from "@/data";

// one icon per feature card, in the same order as data.features
const featureIcons = [LuGlobe, LuShieldCheck, LuTruck, LuUsers];

export default function CourierChoose1({
  data = site.choose,
  className = "",
}: SectionProps<CourierChooseData>) {
  return (
    <section className={`bg-white py-8 md:py-12 ${className}`}>
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div className=" lg:pl-12">
            <div className="flex items-center gap-2.5 text-[18px] font-bold uppercase tracking-[0.12em] text-[#e45204]">
              <span className="font-teko text-[18px]">{data.badge}</span>
              <span className="h-[2px] w-9 bg-[#ca5617]" />
            </div>
            <h2 className="mt-1 text-[36px] font-bold leading-[1.15] tracking-tight text-[#061d36] sm:text-[44px] lg:text-[54px]">
              {data.title.normal}
              <br />
              <span className="text-[#F26A21]">{data.title.highlighted}</span>
            </h2>
            <p className="mt-2 max-w-[520px] text-[16px] leading-[1.7] text-[#2f3442]">
              {data.desc}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {data.features.map((f, i) => {
                const Icon = featureIcons[i];
                return (
                  <div
                    key={f.id}
                    className="flex items-start gap-4 rounded-md bg-white p-4 shadow-[0_8px_26px_rgba(11,27,77,0.09)]"
                  >
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full  bg-[#fcd8be] text-[#ff5900]">
                      <Icon size={34} />
                    </span>
                    <div>
                      <h3 className="text-[20px] font-semibold text-[#0B1B4D]">
                        {f.title}
                      </h3>
                      <div className="bg-orange-600 h-[3px] rounded-full mt-1 w-[30px]"></div>
                      <p className="mt-1 text-[14px] leading-relaxed text-[#272a35]">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* image with orange corner accent */}
          <div className="relative">
            <div
              className="absolute -left-2 h-[100%] rounded-xl w-[5%]  bg-[#ff5b02]"
            />
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="relative h-[320px] w-full rounded-tl-[18px] rounded-br-[8px] object-cover shadow-xl sm:h-[420px] lg:h-[480px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}