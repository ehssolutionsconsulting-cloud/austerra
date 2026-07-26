import "@/styles/components/page-header.scss";

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
}

export default function PageHeader({ eyebrow, title, body }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="container">
        <div className="page-header__eyebrow" aria-hidden="true">
          <span className="page-header__eyebrow-line" />
          <span className="page-header__eyebrow-text">{eyebrow}</span>
        </div>
        <h1 className="page-header__title">{title}</h1>
        {body && <p className="page-header__body">{body}</p>}
      </div>
    </header>
  );
}
