import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import type { CourierBlogPost } from "@/data";
import PageBanner from "@/app/components/shared/PageBanner";
import ScrollReveal from "@/app/components/shared/ScrollReveal";
import { site } from "@/data";

interface BlogDetailProps {
  post: CourierBlogPost;
}

export default function BlogDetail({ post }: BlogDetailProps) {
  const isFeaturedArticle =
    post.slug === "importance-of-on-time-delivery-in-business-growth";

  return (
    <>
      <PageBanner
        title="Blog Detail"
        backgroundImage={site.blog.banner.backgroundImage}
        className="min-h-[290px]"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Blog Detail" },
        ]}
      />

      <ScrollReveal as="main" direction="right" mobileDirection="up" className="bg-[#f7f9fc] px-0 py-3 sm:px-6 sm:py-4 lg:px-8">
        <article className="mx-auto max-w-[1320px] bg-white px-4 py-4 sm:px-7 sm:py-6 lg:px-10 lg:py-7">
          <div className="relative overflow-hidden rounded-md">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={775}
              className="aspect-[1.55/1] w-full object-cover sm:aspect-[2.9/1]"
            />
            <div className="absolute left-4 top-4 rounded-md bg-[#f04b16] px-4 py-2 text-center text-white shadow-md sm:left-5 sm:top-5">
              <span className="block text-xl lg:text-3xl font-bold leading-none">{post.day}</span>
              <span className="mt-1 block text-base lg:text-lg">{post.month}</span>
            </div>
          </div>

          <div className="px-1 pb-2 pt-4 sm:px-2 sm:pt-5">
            <h2 className="text-2xl font-bold leading-tight text-[#0b1b4d] sm:text-3xl">
              {isFeaturedArticle ? (
                <>
                  The Importance of On-Time Delivery in{" "}
                  <span className="text-[#f04b16]">Business Growth</span>
                </>
              ) : (
                post.title
              )}
            </h2>
            <span className="mt-2 block h-[2px] w-9 bg-[#f04b16]" />

            <p className="mt-2 text-base leading-[1.55] text-[#737f91]">
              {isFeaturedArticle
                ? "In today’s fast-paced global market, on-time delivery plays a crucial role in the success of any business. It not only ensures customer satisfaction but also builds trust, enhances brand reputation, and strengthens long-term partnerships. For logistics companies, delivering shipments on time is more than a commitment – it’s a foundation for sustainable business growth."
                : post.description}
            </p>

            <ScrollReveal as="section" direction="left" mobileDirection="up" className="mt-5">
              <h3 className="text-2xl font-bold leading-tight text-[#0b1b4d] sm:text-3xl">
                {isFeaturedArticle ? (
                  <>
                    We Ensure <span className="text-[#f04b16]">Best Quality</span> Logistic Service
                  </>
                ) : (
                  <>
                    Why <span className="text-[#f04b16]">Quality</span> Matters
                  </>
                )}
              </h3>
              <span className="mt-2 block h-[2px] w-9 bg-[#f04b16]" />
              <p className="mt-2 text-base leading-[1.55] text-[#737f91]">
                {isFeaturedArticle
                  ? "At our company, we focus on providing reliable and efficient transportation solutions tailored to your business needs. With a well-maintained fleet, advanced tracking systems, and an experienced team, we ensure that every shipment reaches its destination safely and on time. Our commitment to quality service helps businesses streamline their supply chain and meet customer expectations without delay."
                  : `Our ${post.title.toLowerCase()} article explores practical ways to improve reliability, strengthen customer relationships, and keep shipments moving. With experienced logistics professionals and dependable transportation solutions, businesses can meet delivery expectations with confidence.`}
              </p>
            </ScrollReveal>

            <ScrollReveal as="section" direction="right" mobileDirection="up" className="mt-5">
              <h3 className="text-2xl font-bold leading-tight text-[#0b1b4d] sm:text-3xl">
                {isFeaturedArticle ? (
                  <>
                    Expertise And <span className="text-[#f04b16]">Experience</span>
                  </>
                ) : (
                  <>
                    Practical <span className="text-[#f04b16]">Insights</span>
                  </>
                )}
              </h3>
              <span className="mt-2 block h-[2px] w-9 bg-[#f04b16]" />
              <p className="mt-2 text-base leading-[1.55] text-[#737f91]">
                {isFeaturedArticle
                  ? "With years of experience in the logistics industry, our team has developed the expertise to handle shipments of all sizes and complexities. From route planning and documentation to real-time monitoring, we manage every aspect with precision and care. Our deep industry knowledge allows us to anticipate challenges and provide effective solutions, ensuring smooth and timely delivery across domestic and international routes."
                  : "A clear plan, accurate information, and consistent communication make every supply chain stronger. Use these insights to identify opportunities, solve common shipping challenges, and deliver a better experience to your customers."}
              </p>
            </ScrollReveal>

            <ScrollReveal as="div" direction="up" className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Image
                src="/courier2/img2.webp"
                alt="Cargo ship carrying containers across the ocean"
                width={800}
                height={600}
                className="h-44 w-full rounded-md object-cover sm:h-52"
              />
              <Image
                src="/courier2/img1.webp"
                alt="Freight containers moving by road"
                width={800}
                height={600}
                className="h-44 w-full rounded-md object-cover sm:h-52"
              />
            </ScrollReveal>

            <ScrollReveal as="section" direction="left" mobileDirection="up" className="mt-5">
              <h3 className="text-2xl font-bold leading-tight text-[#0b1b4d] sm:text-3xl">
                {isFeaturedArticle ? (
                  <>
                    How Are Federal Contractors <span className="text-[#f04b16]">Expected.</span>
                  </>
                ) : (
                  <>
                    What Businesses <span className="text-[#f04b16]">Should Know</span>
                  </>
                )}
              </h3>
              <span className="mt-2 block h-[2px] w-9 bg-[#f04b16]" />
              <p className="mt-2 text-base leading-[1.55] text-[#737f91]">
                Logistics providers, especially those working with government and federal contractors, must follow strict guidelines and maintain high standards of reliability, safety, and compliance. Timely delivery, accurate documentation, and adherence to regulatory requirements are essential to meet contractual obligations and avoid penalties.
              </p>
              <ul className="mt-3 space-y-1.5 text-[15px] text-[#737f91]">
                {[
                  "Meeting delivery deadlines as per contractual agreements.",
                  "Maintaining compliance with safety and transport regulations.",
                  "Ensuring accurate documentation and reporting.",
                  "Providing secure and damage-free transportation.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f04b16] text-white">
                      <Check size={15} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal as="section" direction="right" mobileDirection="up" className="mt-5">
              <h3 className="text-2xl font-bold leading-tight text-[#0b1b4d] sm:text-3xl">
                {isFeaturedArticle ? (
                  <>
                    Why Professional <span className="text-[#f04b16]">Transport Services</span> Matter
                  </>
                ) : (
                  <>
                    Better Logistics, <span className="text-[#f04b16]">Better Results</span>
                  </>
                )}
              </h3>
              <span className="mt-2 block h-[2px] w-9 bg-[#f04b16]" />
              <p className="mt-2 text-base leading-[1.55] text-[#737f91]">
                Professional transport services help businesses reduce risks, improve operational efficiency, and ensure customer satisfaction. By partnering with a trusted logistics provider, companies can focus on their core operations while their transportation needs are handled by experts.
              </p>
            </ScrollReveal>

            <Link
              href="/blog"
              className="mt-5 inline-flex items-center gap-3 rounded-md bg-[#f04b16] px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-[#d93f10]"
            >
              <ArrowLeft size={18} />
              Back to blog
            </Link>
          </div>
        </article>
      </ScrollReveal>
    </>
  );
}
