import { NextResponse } from 'next/server'

export async function GET() {
  const response = NextResponse.redirect(new URL('/fr/login', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3010'))

  // Supprimer le cookie JWT
  response.cookies.set('token', '', {
    httpOnly: true,
    path: '/',
    expires: new Date(0),
  })

  return response
}
