import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import FounderStory from "@/components/about/FounderStory";
import TeamGrid from "@/components/about/TeamGrid";
import CertificationsBar from "@/components/about/CertificationsBar";
import AboutCta from "@/components/about/AboutCta";
import { getTeamMembers } from "@/lib/payload";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About | Austerra Group",
  description:
    "Austerra Group — a specialist environmental, occupational hygiene, and geotechnical consulting firm founded by senior scientists and field engineers. Operating across Australia.",
};

export default async function AboutPage() {
  const teamMembers = await getTeamMembers();

  return (
    <>
      <AboutHero />
      <AboutStats />
      <FounderStory />
      <TeamGrid teamMembers={teamMembers} />
      <CertificationsBar />
      <AboutCta />
    </>
  );
}
