import { Suspense } from "react";
import { notFound } from "next/navigation";
import BlogDetail from "@/app/components/layout/blog/BlogDetail";
import { site } from "@/data";

async function BlogDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = site.blog.posts.find((item) => item.slug === slug);

  if (!post) notFound();

  return <BlogDetail post={post} />;
}

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <BlogDetailContent params={params} />
    </Suspense>
  );
}
