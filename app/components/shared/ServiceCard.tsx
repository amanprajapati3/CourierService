import Link from "next/link";
import {
  LuChevronsRight,
  LuClipboardCheck,
  LuMapPin,
  LuPackage,
  LuPlane,
  LuShip,
  LuTrainFront,
  LuTruck,
  LuWarehouse,
} from "react-icons/lu";
import type { CourierServiceItem } from "@/data";

const serviceIcons: Record<string, typeof LuTruck> = {
  truck: LuTruck,
  ship: LuShip,
  plane: LuPlane,
  "train-front": LuTrainFront,
  warehouse: LuWarehouse,
  package: LuPackage,
  "clipboard-check": LuClipboardCheck,
  "map-pin": LuMapPin,
};

export default function ServiceCard({ service }: { service: CourierServiceItem }) {
  const Icon = serviceIcons[service.icon] ?? LuTruck;

  return (
    <article className="relative flex flex-col h-full rounded-xl bg-white shadow-[0_12px_34px_rgba(11,27,77,0.09)] overflow-hidden">
      {/* Top Image Container */}
      <div className="relative h-[200px] w-full overflow-hidden">
        <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
      </div>

      {/* Content Body with Upward Curved Top */}
      <div className="relative flex-1 px-6 pt-12 pb-8 text-center bg-white flex flex-col justify-between">
        {/* Upward curved white overlay & orange border arching into the image */}
        <div className="absolute -top-12 left-0 right-0 h-12 pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full text-white fill-current"
          >
            <path d="M0,120 C300,0 900,0 1200,120 Z"></path>
          </svg>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            <path d="M0,120 C300,0 900,0 1200,120" fill="none" stroke="#df4e00" strokeWidth="17" />
          </svg>
        </div>

        {/* Circular Icon Badge overlapping at the peak of the curve */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
          <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white border-[3px] border-[#F26A21] shadow-md text-[#F26A21]">
            <Icon size={32} />
          </div>
        </div>

        <div className="-mt-8">
          <h3 className="text-[22px] font-bold text-[#0b2950]">{service.title}</h3>
          <p className="mt-1 text-[16px] leading-[1.4] text-[#2d2f38]">{service.description}</p>
        </div>
        <div className="mt-3">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-[15px] font-bold uppercase tracking-wide text-[#f05400] transition-all hover:gap-2.5"
          >
            {service.button.label}
            <LuChevronsRight size={26} />
          </Link>
        </div>
      </div>
    </article>
  );
}
