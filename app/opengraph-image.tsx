import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = '66 Days Prep — Your daily edge in banking and consulting'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0E0E10',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              background: '#FFE500',
              color: '#0E0E10',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            66
          </div>
          <div style={{ display: 'flex', fontSize: 28, fontWeight: 700 }}>
            66 Days Prep
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 66,
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -3,
          }}
        >
          <span>Your daily edge in</span>
          <span>banking &amp; consulting.</span>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            color: '#B8B8BE',
            marginTop: 28,
          }}
        >
          Daily practice. AI feedback. A focused 66-day plan.
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 'auto',
            fontSize: 20,
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '15px 24px',
              background: '#FFE500',
              color: '#0E0E10',
              borderRadius: 12,
              fontWeight: 700,
            }}
          >
            Available on the App Store
          </div>
          <div style={{ display: 'flex', color: '#A1A1AA' }}>
            66daysprep.com
          </div>
        </div>
      </div>
    ),
    size,
  )
}
