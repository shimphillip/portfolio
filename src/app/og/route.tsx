import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? 'Digital Garden'
  const date = searchParams.get('date') ?? ''
  const readingTime = searchParams.get('rt') ?? ''

  return new ImageResponse(
    <div
      style={{
        width: '1200px',
        height: '630px',
        background: '#fbf9f9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Top — wordmark */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #0059ba, #1171e5)',
            borderRadius: '12px',
            width: '48px',
            height: '48px',
          }}
        />
        <span
          style={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#1b1c1c',
            letterSpacing: '-0.02em',
          }}
        >
          Digital Garden
        </span>
      </div>

      {/* Middle — title */}
      <div
        style={{
          fontSize: title.length > 50 ? '52px' : '64px',
          fontWeight: 800,
          color: '#1b1c1c',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          maxWidth: '900px',
        }}
      >
        {title}
      </div>

      {/* Bottom — meta */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <span style={{ fontSize: '18px', color: '#414754' }}>Phillip Shim</span>
        {date && (
          <>
            <span style={{ color: '#c1c6d6' }}>·</span>
            <span style={{ fontSize: '18px', color: '#414754' }}>{date}</span>
          </>
        )}
        {readingTime && (
          <>
            <span style={{ color: '#c1c6d6' }}>·</span>
            <span style={{ fontSize: '18px', color: '#414754' }}>
              {readingTime}
            </span>
          </>
        )}
        {/* Blue accent bar */}
        <div
          style={{
            marginLeft: 'auto',
            background: 'linear-gradient(135deg, #0059ba, #1171e5)',
            borderRadius: '6px',
            width: '80px',
            height: '6px',
          }}
        />
      </div>
    </div>,
    { width: 1200, height: 630 }
  )
}
