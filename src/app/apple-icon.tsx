import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: '#006a34',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: 80,
            fontWeight: 800,
            color: '#6dfe9c',
            letterSpacing: '-3px',
            lineHeight: 1,
          }}
        >
          PS
        </span>
      </div>
    ),
    { ...size }
  )
}
