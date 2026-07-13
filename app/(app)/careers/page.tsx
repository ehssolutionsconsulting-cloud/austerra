import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SectionLabel from "@/components/ui/SectionLabel";
import JobListing from "@/components/careers/JobListing";
import { getJobListings } from "@/lib/payload";
import { CAREERS_EMAIL } from "@/lib/constants";
import "@/styles/components/careers-page.scss";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Careers | Austerra Group",
  description:
    "Join Austerra Group — a specialist Australian environmental and engineering consultancy. Current opportunities for scientists, hygienists, and geotechnical engineers.",
};

const whyJoin = [
  {
    icon: "01",
    title: "Work on Projects That Matter",
    body: "From mine site contamination to hospital indoor air quality — our work has direct, tangible outcomes. Every project contributes something real.",
  },
  {
    icon: "02",
    title: "Senior Mentorship from Day One",
    body: "Our principals take an active role in development. You won't be left alone on site with a checklist — you'll learn from people who've done it for decades.",
  },
  {
    icon: "03",
    title: "Flexible, Field-Ready Culture",
    body: "We understand that consulting is demanding. We offer hybrid working, genuine flexibility, and a culture that respects time away from the screen.",
  },
];

export default async function CareersPage() {
  const activeListings = await getJobListings();

  return (
    <>
      <PageHeader
        eyebrow="Join the Team"
        title={
          <>
            Careers at <em>Austerra.</em>
          </>
        }
        body="We're a growing firm built by scientists who wanted to do things differently. If you take your work seriously and want to work with people who do the same, we'd like to meet you."
      />

      <section className="why-join" aria-labelledby="why-join-heading">
        <div className="why-join__header">
          <h2 id="why-join-heading">
            <SectionLabel>Why Austerra</SectionLabel>
          </h2>
        </div>
        <ul className="why-join__grid" role="list">
          {whyJoin.map((item, i) => (
            <li
              key={item.icon}
              className="why-join__card"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <span className="why-join__card-icon"> //{item.icon}</span>
              <h3 className="why-join__card-title">{item.title}</h3>
              <p className="why-join__card-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="job-listings" aria-labelledby="job-listings-heading">
        <div className="job-listings__header">
          <h2 id="job-listings-heading">
            <SectionLabel>Current Opportunities</SectionLabel>
          </h2>
        </div>
        {activeListings.length > 0 ? (
          <ul
            className="job-listings__list"
            role="list"
            aria-label="Job listings"
          >
            {activeListings.map((job, i) => (
              <JobListing key={job.id} job={job} index={i} />
            ))}
          </ul>
        ) : (
          <div className="job-listings__empty">
            <p className="job-listings__empty-text">
              No current openings — but we&apos;re always interested in hearing
              from strong candidates. Send your CV to{" "}
              <a href={`mailto:${CAREERS_EMAIL}`}>
                {CAREERS_EMAIL}
              </a>
              .
            </p>
          </div>
        )}
      </section>
    </>
  );
}
