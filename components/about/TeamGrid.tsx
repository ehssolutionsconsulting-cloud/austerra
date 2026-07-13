'use client';

import { useRef } from 'react';
import SectionLabel from "@/components/ui/SectionLabel";
import "@/styles/components/about-page.scss";

import type { CmsTeamMember } from "@/lib/payload";

type Discipline = "environmental" | "hygiene" | "geotechnical";

function getDiscipline(role: string): Discipline {
  const r = role.toLowerCase();
  if (r.includes("environmental")) return "environmental";
  if (r.includes("hygiene")) return "hygiene";
  return "geotechnical";
}

export default function TeamGrid({ teamMembers }: { teamMembers: CmsTeamMember[] }) {
  const trackRef = useRef<HTMLUListElement>(null);

  function scroll(dir: 'prev' | 'next') {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector<HTMLElement>('.team-grid__card');
    if (!card) return;
    trackRef.current.scrollBy({
      left: dir === 'next' ? card.offsetWidth + 1 : -(card.offsetWidth + 1),
      behavior: 'smooth',
    });
  }

  if (teamMembers.length === 0) return null;

  return (
    <section className="team-grid" aria-labelledby="team-heading">
      <div className="team-grid__header">
        <h2 id="team-heading">
          <SectionLabel>Our Team</SectionLabel>
        </h2>
        <div className="team-grid__nav">
          <button
            className="team-grid__nav-btn"
            onClick={() => scroll('prev')}
            aria-label="Show previous team members"
          >
            ←
          </button>
          <button
            className="team-grid__nav-btn"
            onClick={() => scroll('next')}
            aria-label="Show next team members"
          >
            →
          </button>
        </div>
      </div>

      <ul
        className="team-grid__track"
        ref={trackRef}
        role="list"
        aria-label="Team members"
      >
        {teamMembers.map((member, i) => {
          const discipline = getDiscipline(member.role);
          return (
            <li
              key={member.initials}
              className={`team-grid__card team-grid__card--${discipline}`}
              tabIndex={0}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <span className="team-grid__bg-initials" aria-hidden="true">
                {member.initials}
              </span>

              <div className="team-grid__overlay">
                <span className="team-grid__quals">{member.qualifications}</span>
                <p className="team-grid__bio">{member.bio}</p>
              </div>

              <div className="team-grid__footer">
                <h3 className="team-grid__name">{member.name}</h3>
                <span className="team-grid__role">{member.role}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
