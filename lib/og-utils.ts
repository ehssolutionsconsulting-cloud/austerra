export function getDisciplineColor(discipline: string): string {
  switch (discipline.toLowerCase()) {
    case 'environmental': return '#c0392b'
    case 'hygiene':
    case 'occhyg':
    case 'occupational-hygiene':
    case 'occupational hygiene': return '#5a6b3a'
    case 'geotechnical': return '#7a6e5e'
    default: return '#5a6b3a'
  }
}

export function getCategoryColor(category: string): string {
  switch (category) {
    case 'Environmental': return '#c0392b'
    case 'Geotechnical':  return '#7a6e5e'
    case 'OccHyg':        return '#5a6b3a'
    default:              return '#5a6b3a'
  }
}

export function truncate(text: string, max: number): string {
  if (text.length <= max) return text
  return text.slice(0, max - 1).trimEnd() + '…'
}
