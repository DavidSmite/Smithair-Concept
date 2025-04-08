import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'Smithair Concept'
  const description = searchParams.get('desc') || 'Perruques de luxe pour femmes afro-européennes'

  const imageUrl = `https://og-image.vercel.app/**${encodeURIComponent(title)}**.png?theme=dark&md=1&desc=${encodeURIComponent(description)}`

  // ✅ ENREGISTREMENT LOCAL DANS og-history.json
  const logPath = path.join(process.cwd(), 'frontend/og-history.json')
  const newEntry = {
    timestamp: new Date().toISOString(),
    title,
    description,
    imageUrl,
  }

  let history: any[] = []
  if (fs.existsSync(logPath)) {
    history = JSON.parse(fs.readFileSync(logPath, 'utf-8'))
  }
  history.unshift(newEntry)
  fs.writeFileSync(logPath, JSON.stringify(history.slice(0, 50), null, 2))

  return NextResponse.json({ imageUrl })
}
