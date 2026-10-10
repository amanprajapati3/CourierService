import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import type { ReactNode } from "react";
import { site, type CourierFooterData, type SectionProps } from "@/data"; // adjust path

const NAVY = "#0B1B4D";
const ORANGE = "#F26A21";

/* Social icons using react-icons */
const socialIcons: Record<string, ReactNode> = {
  facebook: <FaFacebookF size={20} />,
  x: <FaTwitter size={20} />,
  pinterest: <FaPinterestP size={20} />,
  instagram: <FaInstagram size={20} />,
};

const contactIcons: Record<string, typeof MapPin> = {
  "map-pin": MapPin,
  phone: Phone,
  mail: Mail,
};

export default function CourierFooter1({
  data = site.footer,
  className = "",
}: SectionProps<CourierFooterData>) {
  return (
    <footer
      className={`relative overflow-hidden text-white ${className}`}
      style={{
        backgroundImage: `url(${data.footerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Blue gradient overlay with slight transparency so the background image shows through */}
<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#03203b]/95 via-[#003B73]/92 to-[#003B73]/32" />      

      <div className="relative z-20 mx-auto max-w-[1320px] px-4 pb-10 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.2fr] lg:gap-6">
          {/* Brand */}
          <div className=" md:-mt-6">
            <Link href="/" className="inline-block">
              <img
                src="/footerlogo.png"
                alt={data.logoAlt}
                className="h-16 w-auto sm:h-20 lg:h-28"
              />
            </Link>
            <p className="mt-0 max-w-[300px] text-[15px] leading-[1.75] text-white/80">
              {data.desc}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {data.socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#052d3f] text-[#f8f8f8] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F26A21] hover:text-white"
                >
                  {socialIcons[s.label]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {data.columns.map((col) => (
            <div key={col.title}>
              <h3 className="relative mb-6 text-[22px] font-bold">
                {col.title}
                <span
                  className="absolute -bottom-2.5 left-0 h-[2px] w-10"
                  style={{ backgroundColor: ORANGE }}
                />
              </h3>
              <ul>
                {col.links.map((link, i) => (
                  <li
                    key={`${link.label}-${i}`}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-3 py-[9px] text-[14px] text-white transition-all duration-300 hover:translate-x-1 hover:text-white"
                    >
                      <ArrowRight size={14} style={{ color: ORANGE }} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="relative mb-6 text-[22px] font-bold">
              {data.footerContact.title}
              <span
                className="absolute -bottom-2.5 left-0 h-[2px] w-10"
                style={{ backgroundColor: ORANGE }}
              />
            </h3>
            <ul className="space-y-5">
              {data.footerContact.items.map((item) => {
                const Icon = contactIcons[item.icon] ?? MapPin;
                return (
                  <li key={item.label} className="flex items-start gap-4">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: ORANGE }}
                    >
                      <Icon size={21} />
                    </span>
                    <div className="text-[16px] leading-[1.6] text-white/85">
                      <p className="mb-0.5 text-[17px] font-semibold text-white">
                        {item.label}
                      </p>
                      {item.lines.map((line, i) =>
                        "href" in line && line.href ? (
                          <a
                            key={i}
                            href={line.href}
                            className="block break-all transition-colors hover:text-[#F26A21]"
                          >
                            {line.text}
                          </a>
                        ) : (
                          <span key={i} className="block">
                            {line.text}
                          </span>
                        )
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative z-20 border-t border-white">
        <p className="mx-auto max-w-[1320px] px-4 py-5 text-center text-[15px] text-white/80 sm:px-6 lg:px-8">
          {data.copyright.prefix}{" "}
          <span style={{ color: ORANGE }}>{data.copyright.brand}</span>{" "}
          {data.copyright.suffix}
        </p>
      </div>
    </footer>
  );
}