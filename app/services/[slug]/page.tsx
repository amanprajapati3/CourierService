import { Suspense } from "react";
import { notFound } from "next/navigation";
import ServiceDetail from "@/app/components/layout/services/ServiceDetail";
import { site } from "@/data";

async function ServiceDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = site.services.services.find((item) => item.slug === slug);

  if (!service) notFound();

  return <ServiceDetail service={service} />;
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <ServiceDetailContent params={params} />
    </Suspense>
  );
}
