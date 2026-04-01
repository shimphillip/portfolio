import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: '#006a34',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: 14,
            fontWeight: 800,
            color: '#6dfe9c',
            letterSpacing: '-0.5px',
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
