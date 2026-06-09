import "@/styles/components/discipline-tag.scss";

type Discipline = "environmental" | "hygiene" | "geotechnical" | "general";

interface DisciplineTagProps {
  discipline: Discipline;
  label: string;
}

export default function DisciplineTag({ discipline, label }: DisciplineTagProps) {
  return (
    <span className={`discipline-tag discipline-tag--${discipline}`}>
      {label}
    </span>
  );
}
