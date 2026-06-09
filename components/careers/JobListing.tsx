import "@/styles/components/careers-page.scss";

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  discipline: string;
  closingDate: string;
  active: boolean;
  description: string;
}

interface JobListingProps {
  job: Job;
  index?: number;
}

export default function JobListing({ job, index = 0 }: JobListingProps) {
  const closing = new Date(job.closingDate).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <li
      className="job-listing"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="job-listing__left">
        <h3 className="job-listing__title">{job.title}</h3>

        <ul className="job-listing__meta" role="list" aria-label="Job details">
          <li className="job-listing__meta-item">{job.location}</li>
          <li className="job-listing__meta-item">{job.type}</li>
          <li className="job-listing__meta-item">{job.discipline}</li>
        </ul>

        <p className="job-listing__description">{job.description}</p>
      </div>

      <div className="job-listing__right">
        <span className="job-listing__closing">
          Closes {closing}
        </span>
        <a
          className="job-listing__apply"
          href={`mailto:careers@austerra.com.au?subject=Application — ${job.title} (${job.id})`}
          aria-label={`Apply for ${job.title}`}
        >
          Apply Now
        </a>
      </div>
    </li>
  );
}
