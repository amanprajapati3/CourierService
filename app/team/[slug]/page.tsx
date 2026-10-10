import { Suspense } from "react";
import { notFound } from "next/navigation";
import TeamDetail from "@/app/components/layout/team/TeamDetail";
import { site } from "@/data";

async function TeamDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = site.team.members.find((item) => item.slug === slug);

  if (!member) notFound();

  return <TeamDetail member={member} />;
}

export default function TeamDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <TeamDetailContent params={params} />
    </Suspense>
  );
}
