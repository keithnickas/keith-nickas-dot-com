import satori from 'satori';
import sharp from 'sharp';
import { NextRequest } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Keith Nickas';
  const subtitle = searchParams.get('subtitle') || 'Senior Frontend Engineer';
  const theme = searchParams.get('theme') || 'cyan'; // cyan, purple, orange
  const techStackParam = searchParams.get('techStack') || 'React,Next.js,TypeScript';
  const techStack = techStackParam.split(',').map((tech) => tech.trim());

  // Theme gradients matching your case studies
  const gradients: Record<string, string> = {
    cyan: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    purple: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    orange: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
  };

  // Load font (you'll need to add a font file to your project)
  const fontPath = path.join(process.cwd(), 'public', 'fonts', 'Inter-Regular.ttf');
  const fontData = await fs.readFile(fontPath);

  const svg = await satori(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: gradients[theme] || gradients.cyan,
        padding: '80px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 36,
            color: 'rgba(255, 255, 255, 0.9)',
            textAlign: 'center',
            margin: 0,
          }}
        >
          {subtitle}
        </p>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '32px',
          }}
        >
          {techStack.map((tech) => (
            <div
              key={tech}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: 24,
                color: 'white',
              }}
            >
              {tech}
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: 20,
            color: 'rgba(255, 255, 255, 0.7)',
            marginTop: '48px',
          }}
        >
          by Keith Nickas
        </p>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          weight: 400,
        },
      ],
    }
  );

  // Convert SVG to PNG using sharp
  const png = await sharp(Buffer.from(svg))
    .png()
    .toBuffer();

  return new Response(png as BodyInit, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
