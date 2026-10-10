import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface PageBannerProps {
  title: string;
  currentPage?: string;
  homePage?: string;
  backgroundImage?: string;
  className?: string;
  breadcrumbItems?: { label: string; href?: string }[];
}

export default function PageBanner({
  title,
  currentPage,
  homePage = "Home",
  backgroundImage,
  className = "",
  breadcrumbItems,
}: PageBannerProps) {
  const breadcrumbs = breadcrumbItems ?? [
    { label: homePage, href: "/" },
    ...(currentPage ? [{ label: currentPage }] : []),
  ];

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <img src={backgroundImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#0a2e46]/85"  />
      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <h1 className="mt-3 text-[32px] font-bold leading-tight text-white sm:text-[44px] lg:text-[52px]">
          {title}
        </h1>
        <nav className="mt-4 flex items-center justify-center gap-2 text-[16px] font-semibold sm:text-[20px] font-teko">
          {breadcrumbs.map((item, index) => (
            <span key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-white">
                  <FaArrowRightLong />
                </span>
              )}
              {item.href ? (
                <Link href={item.href} className="text-white/70 transition-colors hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}