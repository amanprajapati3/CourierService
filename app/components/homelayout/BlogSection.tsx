"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { LuChevronLeft, LuChevronRight, LuChevronsRight, LuMessageSquare, LuUser } from "react-icons/lu";
import { IoIosAirplane } from "react-icons/io";

import { site, type CourierBlogData, type SectionProps } from "@/data";

const PER_PAGE = 6;

interface CourierBlog1Props extends SectionProps<CourierBlogData> {
  limit?: number;
  paginate?: boolean;
}

export default function CourierBlog1({
  data = site.blog,
  className = "",
  limit,
  paginate = false,
}: CourierBlog1Props) {
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const totalPages = paginate ? Math.ceil(data.posts.length / PER_PAGE) : 1;
  const posts = paginate
    ? data.posts.slice((page - 1) * PER_PAGE, page * PER_PAGE)
    : data.posts.slice(0, limit ?? data.posts.length);

  const goTo = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    setPage(next);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={`bg-white pb-24 pt-8 md:py-12 ${className}`}>
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* centered heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-[18px] font-bold uppercase tracking-[0.12em] text-[#ff5a01]">
            <span className="h-[2px] w-9 bg-[#f35602]" />
            <div className="rotate-[180deg]">
              <IoIosAirplane size={24} />
            </div>

            <span className="font-teko mt-1 text-[18px]">{data.badge}</span>
            <IoIosAirplane size={24} />
            <span className="h-[2px] w-9 bg-[#ff5900]" />
          </div>
          <h2 className="mt-1 text-[36px] font-bold leading-[1.1] text-[#0B1B4D] sm:text-[44px] lg:text-[58px]">
            {data.title.normal}
            <br />
            <span className="text-[#F26A21]">{data.title.highlighted}</span>
          </h2>
          <p className="mx-auto mt-1 max-w-[560px] text-[16px] leading-[1.7] text-[#292d3a]">
            {data.desc}
          </p>
        </div>

        <div ref={gridRef} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.id}
              className="group rounded-md bg-white shadow-[0_12px_34px_rgba(11,27,77,0.1)]"
            >
              <div className="relative ">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-[210px] w-full rounded-t-xl object-cover transition-transform duration-500 "
                />
                <div className="absolute right-3 -top-3 rounded bg-[#F26A21] px-3 py-1.5 text-center text-white shadow-md">
                  <div className="text-[18px] font-extrabold leading-none">{p.day}</div>
                  <div className="mt-0.5 text-[11px] font-medium">{p.month}</div>
                </div>
              </div>

              <div className="py-4 px-6">
                <div className="flex flex-wrap items-center gap-4 text-[15px] text-[#6b7390]">
                  <span className="flex items-center gap-1.5">
                    <LuUser size={24} className="text-[#ff5900]" />
                    {p.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <LuMessageSquare size={24} className="text-[#ff5900]" />
                    {p.comments}
                  </span>
                </div>
                <h3 className="mt-3 text-[25px] font-semibold leading-snug text-[#07247a]">{p.title}</h3>
                <p className="mt-2.5 text-[16px] leading-[1.7] text-[#2c2f38]">{p.description}</p>
                <Link
                  href={`/blog/${p.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-bold uppercase tracking-wide text-[#ff5c04] transition-all hover:gap-2.5"
                >
                  {p.readMoreText}
                  <LuChevronsRight size={26} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {paginate && totalPages > 1 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
            <button
              type="button"
              aria-label="Previous page"
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 transition-colors hover:border-[#F26A21] hover:text-[#F26A21] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:text-gray-500"
            >
              <LuChevronLeft size={20} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                aria-label={`Page ${p}`}
                aria-current={p === page ? "page" : undefined}
                onClick={() => goTo(p)}
                className={`h-11 min-w-11 cursor-pointer rounded-md px-4 text-[15px] font-bold transition-colors ${
                  p === page
                    ? "bg-[#F26A21] text-white shadow-[0_6px_16px_rgba(242,106,33,0.4)]"
                    : "border border-gray-300 bg-white text-gray-500 hover:border-[#F26A21] hover:text-[#F26A21]"
                }`}
              >
                {p}
              </button>
            ))}

            <button
              type="button"
              aria-label="Next page"
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md bg-[#F26A21] text-white shadow-[0_6px_16px_rgba(242,106,33,0.4)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:brightness-100"
            >
              <LuChevronRight size={20} />
            </button>
          </div>
        )}

        {!paginate && (
          <div className="mt-12 text-center">
            <Link
              href={data.button.href}
              className="inline-flex items-center gap-2 rounded-md bg-[#fc5901] px-7 py-3.5 text-[12px] font-bold uppercase tracking-wide text-white shadow-[0_8px_20px_rgba(242,106,33,0.35)] transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              {data.button.label}
              <LuChevronsRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
