import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? 'Phillip Shim'
  const date = searchParams.get('date') ?? ''
  const readingTime = searchParams.get('rt') ?? ''

  return new ImageResponse(
    <div
      style={{
        width: '1200px',
        height: '630px',
        background: 'linear-gradient(135deg, #fffdf8 0%, #f2ede4 100%)',
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
            background: 'linear-gradient(135deg, #ffd60a, #f0c200)',
            borderRadius: '16px',
            width: '56px',
            height: '56px',
          }}
        />
        <span
          style={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#1a1814',
            letterSpacing: '-0.02em',
          }}
        >
          Phillip Shim
        </span>
      </div>

      {/* Middle — title */}
      <div
        style={{
          fontSize: title.length > 50 ? '52px' : '64px',
          fontWeight: 800,
          color: '#1a1814',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          maxWidth: '900px',
        }}
      >
        {title}
      </div>

      {/* Bottom — meta */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <span style={{ fontSize: '18px', color: '#4a4540' }}>
          Frontend Engineer
        </span>
        {date && (
          <>
            <span style={{ color: '#9e9688' }}>·</span>
            <span style={{ fontSize: '18px', color: '#4a4540' }}>{date}</span>
          </>
        )}
        {readingTime && (
          <>
            <span style={{ color: '#9e9688' }}>·</span>
            <span style={{ fontSize: '18px', color: '#4a4540' }}>
              {readingTime}
            </span>
          </>
        )}
        {/* Blue accent bar */}
        <div
          style={{
            marginLeft: 'auto',
            background: 'linear-gradient(135deg, #4a3800, #8c6b00)',
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
