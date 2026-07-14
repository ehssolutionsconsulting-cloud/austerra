import { ImageResponse } from 'next/og'
import { getProjectBySlug } from '@/lib/payload'
import { getDisciplineColor, truncate } from '@/lib/og-utils'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateImageMetadata({ params }: Props) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  return [{ alt: project ? `${project.title} — Austerra Group` : 'Austerra Group Project', id: 1 }]
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  const title = project ? truncate(project.title, 60) : 'Project'
  const discipline = project?.discipline ?? 'environmental'
  const accentColor = getDisciplineColor(discipline)
  const disciplineLabel = discipline.charAt(0).toUpperCase() + discipline.slice(1)
  const meta = project
    ? [project.client, String(project.year), project.location].filter(Boolean).join(' · ')
    : ''

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '1200px',
          height: '630px',
          background: '#1a1a14',
        }}
      >
        {/* Left accent stripe — discipline color */}
        <div style={{ display: 'flex', width: '8px', background: accentColor, flexShrink: 0 }} />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            padding: '60px 80px',
            justifyContent: 'space-between',
          }}
        >
          {/* Top row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span
              style={{
                color: '#b5a882',
                fontSize: '16px',
                fontFamily: 'monospace',
                letterSpacing: '0.08em',
              }}
            >
              // AUSTERRA GROUP
            </span>
            <span
              style={{
                color: accentColor,
                fontSize: '13px',
                fontFamily: 'monospace',
                letterSpacing: '0.1em',
                border: `1px solid ${accentColor}`,
                padding: '4px 12px',
              }}
            >
              {disciplineLabel.toUpperCase()}
            </span>
          </div>

          {/* Centre — project title */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                color: '#8a8a7a',
                fontSize: '15px',
                fontFamily: 'monospace',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              // PROJECT
            </div>
            <div
              style={{
                color: '#f7f4ed',
                fontSize: title.length > 40 ? '52px' : '64px',
                fontFamily: 'serif',
                fontWeight: 300,
                lineHeight: 1.1,
              }}
            >
              {title}
            </div>
            {meta ? (
              <div
                style={{
                  color: '#8a8a7a',
                  fontSize: '20px',
                  fontFamily: 'sans-serif',
                  fontWeight: 300,
                  marginTop: '20px',
                }}
              >
                {meta}
              </div>
            ) : null}
          </div>

          {/* Bottom */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              borderTop: '1px solid #4a4a3a',
              paddingTop: '20px',
            }}
          >
            <span
              style={{
                color: '#b5a882',
                fontSize: '15px',
                fontFamily: 'monospace',
                letterSpacing: '0.06em',
              }}
            >
              austerra.com.au
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
