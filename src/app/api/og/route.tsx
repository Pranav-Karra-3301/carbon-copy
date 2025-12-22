import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const title = searchParams.get('title') || 'Carbon Copy';
  const description = searchParams.get('description') || 'Vintage Form UI Components';
  const component = searchParams.get('component');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#A8D5D8',
          padding: '40px',
          fontFamily: '"Courier New", Courier, monospace',
        }}
      >
        {/* Main container with border */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            border: '3px solid #324D88',
            backgroundColor: '#F5F2E8',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 30px',
              borderBottom: '2px solid #324D88',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  border: '2px solid #324D88',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#324D88',
                }}
              >
                CC
              </div>
              <span
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#1E3A5F',
                  letterSpacing: '0.02em',
                }}
              >
                Carbon Copy
              </span>
            </div>
            <span
              style={{
                fontSize: '14px',
                color: '#6B8BC8',
                border: '1px solid #6B8BC8',
                padding: '4px 12px',
              }}
            >
              v0.1.0
            </span>
          </div>

          {/* Content */}
          <div
            style={{
              display: 'flex',
              flex: 1,
              padding: '40px',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {component && (
              <div
                style={{
                  fontSize: '14px',
                  color: '#8B1538',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '10px',
                }}
              >
                {component}
              </div>
            )}
            <h1
              style={{
                fontSize: component ? '48px' : '64px',
                fontWeight: 'bold',
                color: '#1E3A5F',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: '24px',
                color: '#324D88',
                margin: '20px 0 0',
                maxWidth: '600px',
              }}
            >
              {description}
            </p>
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '15px 30px',
              borderTop: '1px solid #324D88',
              fontSize: '12px',
              color: '#6B8BC8',
            }}
          >
            <span>carbon-copy.dev/docs</span>
            <span>Vintage Form UI Components for React</span>
          </div>
        </div>

        {/* Bottom banner */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px',
            backgroundColor: '#8B1538',
            color: '#F5F2E8',
            fontSize: '14px',
            letterSpacing: '0.15em',
            fontWeight: 'bold',
          }}
        >
          DOCUMENTATION
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

