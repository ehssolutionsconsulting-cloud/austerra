import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjects, getProjectBySlug } from "@/lib/payload";
import ProjectDetail from "@/components/projects/ProjectDetail";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const revalidate = 3600;
export const dynamicParams = true;

const BASE = process.env.NEXT_PUBLIC_SERVER_URL ?? "https://austerra.com.au";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | AUSTERRA CONSULTING`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: BASE },
          { name: "Projects", url: `${BASE}/projects` },
          { name: project.title, url: `${BASE}/projects/${project.slug}` },
        ])}
      />
      <ProjectDetail project={project} />
    </article>
  );
}
