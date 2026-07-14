import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Austerra Group — Australian environmental, occupational hygiene and geotechnical engineering consulting'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
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
        {/* Left accent stripe */}
        <div style={{ display: 'flex', width: '8px', background: '#5a6b3a', flexShrink: 0 }} />

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
                fontSize: '18px',
                fontFamily: 'monospace',
                letterSpacing: '0.08em',
              }}
            >
              // AUSTERRA GROUP
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ color: '#8a8a7a', fontSize: '13px', fontFamily: 'monospace', letterSpacing: '0.06em' }}>
                ENVIRONMENTAL · OCCUPATIONAL HYGIENE
              </span>
              <span style={{ color: '#8a8a7a', fontSize: '13px', fontFamily: 'monospace', letterSpacing: '0.06em' }}>
                GEOTECHNICAL ENGINEERING
              </span>
            </div>
          </div>

          {/* Centre — main heading */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                color: '#f7f4ed',
                fontSize: '68px',
                fontFamily: 'serif',
                fontWeight: 300,
                lineHeight: 1.1,
              }}
            >
              Grounded in Science.
            </div>
            <div
              style={{
                color: '#f7f4ed',
                fontSize: '68px',
                fontFamily: 'serif',
                fontWeight: 300,
                lineHeight: 1.1,
              }}
            >
              Built for the Field.
            </div>
            <div
              style={{
                color: '#8a8a7a',
                fontSize: '22px',
                fontFamily: 'sans-serif',
                fontWeight: 300,
                marginTop: '20px',
              }}
            >
              Australian infrastructure, energy, mining and construction consulting.
            </div>
          </div>

          {/* Bottom rule + domain */}
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
                fontSize: '16px',
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
