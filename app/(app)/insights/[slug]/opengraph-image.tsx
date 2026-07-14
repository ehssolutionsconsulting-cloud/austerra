import { ImageResponse } from 'next/og'
import { getInsights, getInsightBySlug } from '@/lib/payload'
import { getCategoryColor, truncate } from '@/lib/og-utils'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const insights = await getInsights()
  return insights.map((i) => ({ slug: i.slug }))
}

export async function generateImageMetadata({ params }: Props) {
  const { slug } = await params
  const insight = await getInsightBySlug(slug)
  return [{ alt: insight ? `${insight.title} — Austerra Group Insights` : 'Austerra Group Insights', id: 1 }]
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  const insight = await getInsightBySlug(slug)

  const title = insight ? truncate(insight.title, 65) : 'Technical Insight'
  const category = insight?.category ?? 'General'
  const accentColor = getCategoryColor(category)
  const byline = insight
    ? [insight.author, insight.readTime].filter(Boolean).join(' · ')
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
        {/* Left accent stripe — category color */}
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
              {category.toUpperCase()}
            </span>
          </div>

          {/* Centre — insight title */}
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
              // TECHNICAL INSIGHTS
            </div>
            <div
              style={{
                color: '#f7f4ed',
                fontSize: title.length > 45 ? '50px' : '62px',
                fontFamily: 'serif',
                fontWeight: 300,
                lineHeight: 1.15,
              }}
            >
              {title}
            </div>
            {byline ? (
              <div
                style={{
                  color: '#8a8a7a',
                  fontSize: '18px',
                  fontFamily: 'sans-serif',
                  fontWeight: 300,
                  marginTop: '20px',
                }}
              >
                {byline}
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
