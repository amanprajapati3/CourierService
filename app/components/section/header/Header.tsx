"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Clock, Mail, Menu, Phone, Send, X } from "lucide-react";
import {
  site,
  type CourierHeaderData,
  type CourierTopbarData,
  type SectionProps,
} from "@/data";

const NAVY = "#0B1B4D";
const ORANGE = "#F26A21";

interface CourierHeaderProps extends SectionProps<CourierHeaderData> {
  topbarData?: CourierTopbarData;
}

/*  Topbar  */

export function CourierTopbar1({
  data = site.topbar,
  className = "",
}: SectionProps<CourierTopbarData>) {
  return (
    <div
      className={`text-white ${className}`}
      style={{ backgroundColor: NAVY }}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 py-2 text-[12px] sm:px-6 sm:text-[13px] lg:px-8">
        <div className="flex items-center gap-4 sm:gap-8">
          <a
            href={data.phoneHref}
            className="flex items-center text-sm lg:text-lg gap-2 transition-colors hover:text-[#F26A21]"
          >
            <Phone size={25} style={{ color: ORANGE }} />
            <span>{data.phone}</span>
          </a>
          <a
            href={data.emailHref}
            className="items-center text-sm lg:text-lg gap-2 transition-colors hover:text-[#F26A21] flex"
          >
            <Mail size={25} style={{ color: ORANGE }} />
            <span>{data.email}</span>
          </a>
        </div>

        <div className="hidden items-center text-sm lg:text-lg gap-2 md:flex">
          <Clock size={25} style={{ color: ORANGE }} />
          <span>{data.workingHours}</span>
        </div>
      </div>
    </div>
  );
}

/*  Header  */

export default function CourierHeader1({
  data = site.header,
  topbarData = site.topbar,
  className = "",
}: CourierHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on desktop resize
  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  const button = data.buttons[0];

  const QuoteButton = ({ full = false }: { full?: boolean }) => (
    <Link
      href={button.href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[20px] font-semibold text-white shadow-[0_8px_20px_rgba(242,106,33,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 ${
        full ? "w-full" : ""
      }`}
      style={{ backgroundColor: ORANGE }}
    >
      <Send size={26} className="-rotate-12" />
      {button.label}
    </Link>
  );

  return (
    <>
      {/* Wrapper containing both Topbar and Header locked together at the top */}
      <div className={`sticky top-0 z-50 ${className}`}>
        <CourierTopbar1 data={topbarData} />

        <header className="bg-white shadow-[0_2px_12px_rgba(11,27,77,0.08)]">
          <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:h-[80px] lg:px-8">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src={data.site.logo.normal}
                alt={data.site.logo.alt}
                width={220}
                height={80}
                className="h-16 w-auto sm:h-20 lg:h-24 pt-2"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-9 lg:flex">
              {data.nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative py-2 text-[20px] font-semibold transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-[#F26A21] after:transition-all after:duration-300 ${
                      active
                        ? "text-[#F26A21] after:w-full"
                        : "text-[#0B1B4D] after:w-0 hover:text-[#F26A21] hover:after:w-full"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <QuoteButton />
              </div>
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors lg:hidden"
                style={{ backgroundColor: ORANGE }}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-[#0B1B4D]/60 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Mobile drawer (slides from left) */}
      <aside
        className={`fixed inset-y-0 left-0 z-[70] flex w-[82%] max-w-[340px] transform flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src={data.site.logo.normal}
              alt={data.site.logo.alt}
              width={220}
              height={80}
              className="h-16 w-auto"
            />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
            style={{ backgroundColor: ORANGE }}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-4">
          <ul className="flex flex-col">
            {data.nav.map((item, i) => {
              const active = isActive(item.href);
              return (
                <li
                  key={item.label}
                  className={`transition-all duration-300 ease-out ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-gray-100 py-3.5 text-[16px] font-semibold transition-colors ${
                      active
                        ? "text-[#F26A21]"
                        : "text-[#0B1B4D] hover:text-[#F26A21]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-4 border-t border-gray-100 p-5">
          <QuoteButton full />
          <div className="space-y-2 text-[13px] text-[#0B1B4D]">
            <a href={topbarData.phoneHref} className="flex items-center gap-2">
              <Phone size={15} style={{ color: ORANGE }} />
              {topbarData.phone}
            </a>
            <a href={topbarData.emailHref} className="flex items-center gap-2">
              <Mail size={15} style={{ color: ORANGE }} />
              {topbarData.email}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}