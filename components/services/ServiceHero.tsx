import Image from "next/image";
import "@/styles/components/service-hero.scss";

interface ServiceHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  image: string;
  imageAlt: string;
  disciplineNumber: "01" | "02" | "03";
}

export default function ServiceHero({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  disciplineNumber,
}: ServiceHeroProps) {
  return (
    <header className={`service-hero service-hero--${disciplineNumber}`}>
      <div className="service-hero__content">
        <div className="service-hero__eyebrow" aria-hidden="true">
          <span className="service-hero__eyebrow-line" />
          <span className="service-hero__eyebrow-text">{eyebrow}</span>
        </div>
        <h1 className="service-hero__title">{title}</h1>
        <p className="service-hero__body">{body}</p>
      </div>
      <div className="service-hero__image-wrap">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="service-hero__img"
          sizes="(max-width: 768px) 100vw, 40vw"
          priority
        />
      </div>
    </header>
  );
}
