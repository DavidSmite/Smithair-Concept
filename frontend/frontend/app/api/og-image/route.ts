import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'Smithair Concept'
  const description = searchParams.get('desc') || 'Perruques de luxe pour femmes afro-européennes'

  return NextResponse.json({
    imageUrl: `https://og-image.vercel.app/**${encodeURIComponent(title)}**.png?theme=dark&md=1&desc=${encodeURIComponent(description)}`
  })
}
