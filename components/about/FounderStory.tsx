import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import "@/styles/components/about-page.scss";

export default function FounderStory() {
  return (
    <section className="founder-story" aria-labelledby="founder-heading">
      <div className="founder-story__left">
        <div className="founder-story__label">
          <SectionLabel>Our Story</SectionLabel>
        </div>
        <p className="founder-story__year">Est. 2019</p>
        <h2 id="founder-heading" className="founder-story__heading">
          Founded on the principle that <em>science</em> and{" "}
          <em>field experience</em> are inseparable.
        </h2>
        <p className="founder-story__body">
          AUSTERRA CONSULTING was established by a group of senior scientists
          and engineers who had spent their careers working on Australia&apos;s
          largest infrastructure and resources projects — and had grown
          frustrated by the gap between office-bound consulting and the
          realities of the field.
        </p>
        <p className="founder-story__body">
          The name reflects that commitment: <em>Austerra</em> — Southern Earth.
          A reminder that our work is always grounded in the physical world,
          with all its complexity and consequence.
        </p>
        <p className="founder-story__body">
          Today our team of principals and specialists operates in Sydney
          working with infrastructure proponents, mining operators, and
          government agencies on projects that matter.
        </p>
      </div>

      <div className="founder-story__right" aria-hidden="true">
        <div className="founder-story__bento">
          <div className="founder-story__bento-img founder-story__bento-img--1">
            <Image
              src="/images/services/environmental.jpg"
              alt=""
              fill
              className="founder-story__bento-photo"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="founder-story__bento-img founder-story__bento-img--2">
            <Image
              src="/images/services/occupational-hygiene.jpg"
              alt=""
              fill
              className="founder-story__bento-photo"
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>
          <div className="founder-story__bento-img founder-story__bento-img--3">
            <Image
              src="/images/services/geotechnical.jpg"
              alt=""
              fill
              className="founder-story__bento-photo"
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>
        </div>
      </div>

      <p className="founder-story__watermark" aria-hidden="true">
        Southern Earth
      </p>
    </section>
  );
}
