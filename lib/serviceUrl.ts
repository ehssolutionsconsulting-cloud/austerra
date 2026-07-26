const DISCIPLINE_SLUG: Record<string, string> = {
  "1": "environmental",
  "2": "occupational-hygiene",
  "3": "geotechnical",
};

export function serviceUrl(service: { disciplineNumber: string; slug: string }): string {
  return (
    DISCIPLINE_SLUG[service.disciplineNumber] ??
    service.slug.toLowerCase().replace(/\s+/g, "-")
  );
}
