import { Check, Plane, Truck } from "lucide-react";
import type { CourierServiceItem } from "@/data";
import PageBanner from "@/app/components/shared/PageBanner";
import { site } from "@/data";

const roadFeatures = [
  "Nationwide & International Coverage",
  "Safe & Secure Transportation",
  "Real-Time Shipment Tracking",
  "Flexible Load Options (FTL & LTL)",
  "Modern & Well-Maintained Fleet",
  "Cost-Effective Logistics Solutions",
  "Experienced & Professional Drivers",
];

interface ServiceDetailProps {
  service: CourierServiceItem;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const isRoadFreight = service.slug === "road-freight";
  const title = isRoadFreight ? "Road Freight" : service.title;
  const description = isRoadFreight
    ? "Our road freight services provide a reliable and cost-effective solution for transporting goods across cities, states, and countries. With a strong network, modern fleet, and real-time tracking, we ensure your shipments reach their destination safely and on time."
    : service.description;
  const secondParagraph = isRoadFreight
    ? "Whether you need to move small parcels or bulk cargo, our road transportation solutions are designed to meet your business and personal shipping needs with maximum efficiency and security. We handle all types of goods with care and provide flexible logistics solutions to support your supply chain."
    : `From pickup to final delivery, our ${service.title.toLowerCase()} solutions are designed around your schedule and shipping requirements. Our experienced team handles every shipment with care, keeping your goods moving safely and efficiently.`;
  const features = isRoadFreight
    ? roadFeatures
    : [
        "Reliable, On-Time Service",
        "Safe & Secure Shipment Handling",
        "Real-Time Shipment Updates",
        "Flexible Solutions for Every Load",
        "Experienced Logistics Team",
        "Efficient, Cost-Effective Delivery",
      ];
  const detailDescription = isRoadFreight
    ? "We offer end-to-end road freight solutions tailored to your specific requirements. Our experienced team, advanced tracking systems, and well-maintained vehicles ensure hassle-free and timely delivery of your goods."
    : `We offer end-to-end ${service.title.toLowerCase()} solutions tailored to your specific requirements. Our experienced team and reliable logistics network ensure your goods are handled carefully and delivered on schedule.`;

  return (
    <>
      <PageBanner
        title="Service Detail"
        backgroundImage={site.services.banner.backgroundImage}
        className="min-h-[290px]"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Service Detail" },
        ]}
      />

      <main className="bg-[#f7f9fc] px-0 py-3 sm:px-0 sm:py-4 lg:px-8">
        <article className="mx-auto max-w-[1320px] bg-white px-4 py-4 sm:px-7 sm:py-6 lg:px-10 lg:py-7">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={service.image}
              alt={`${service.title} freight transportation`}
              className="aspect-[1.55/1] w-full object-cover sm:aspect-[2.15/1]"
            />
            <div className="absolute hidden lg:block bottom-5 left-4 sm:bottom-8 sm:left-8">
              <div
                className="bg-[#f04b16] p-[3px] rounded-xl shadow-lg"
                style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)" }}
              >
                <div
                  className="flex items-center rounded-xl gap-4 bg-white px-4 py-3 sm:gap-5 sm:pl-6 sm:pr-20 sm:py-4"
                  style={{
                    clipPath: "polygon(0 0, 89.5% 0, 99.5% 100%, 0 100%)",
                  }}
                >
                  <Truck className="h-8 w-8 shrink-0 text-[#f04b16] sm:h-20 sm:w-20" />
                  <span className="h-16 w-[2px] shrink-0 bg-slate-300" />
                  <span>
                    <span className="block text-xl font-bold leading-tight text-[#0b1b4d] sm:text-3xl lg:text-5xl">
                      {service.title}
                    </span>
                    <span className="mt-1  block text-sm text-[#f04b16] sm:text-lg lg:text-xl">
                      Fast · Safe · Reliable
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <section className="px-1 pb-7 pt-7 sm:px-4 sm:pb-9 sm:pt-8 lg:px-7">
            <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-[#f04b16] sm:text-lg">
              <span className="font-teko text-[18px]">Our Service</span>
              <Plane size={28} fill="currentColor" />
              <span className="h-[2px] w-10 bg-[#f04b16]" />
            </div>
            <h2 className="mt-1 text-4xl font-bold leading-tight text-[#0b1b4d] sm:text-5xl lg:text-7xl">
              <span className="text-[#f04b16]">{title}</span>{" "}
              <span>Services</span>
            </h2>
            <p className="mt-2 text-base leading-[1.7] text-[#737f91] sm:text-lg lg:text-xl">
              {description}
            </p>
            <p className="mt-5 text-base leading-[1.7] text-[#737f91] sm:text-lg lg:text-xl">
              {secondParagraph}
            </p>
          </section>

          <section className="grid items-center gap-7 px-1 pb-2 sm:px-2 lg:grid-cols-2 lg:gap-8">
            <img
              src={isRoadFreight ? "/courier/img7.png" : service.image}
              alt={`${service.title} delivery in transit`}
              className="h-full min-h-[260px] max-h-[470px] w-full rounded-xl object-cover"
            />
            <div className="py-2">
              <h3 className="flex items-start gap-4 text-2xl font-bold leading-tight text-[#0b1b4d] sm:text-3xl">
                <span className="mt-3 h-1.5 w-6 shrink-0 rounded-sm bg-[#f04b16]" />
                Reliable {title} Transportation
              </h3>
              <p className="mt-3 text-base md:text-xl leading-[1.65] text-[#737f91]">
                {detailDescription}
              </p>
              <ul className="mt-5 space-y-2.5">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-4 text-base md:text-xl text-[#737f91] sm:text-lg"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#f04b16] text-[#f04b16]">
                      <Check size={20} strokeWidth={2.5} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
