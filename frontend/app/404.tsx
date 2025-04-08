'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-yellow-50 flex flex-col items-center justify-center text-gray-800 p-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">404 Not Found</h1>
        
        <p className="italic text-lg md:text-xl mb-6 text-gray-600">
          In the heat of day,<br />
          The path dissolves to nothing—<br />
          An empty mirage.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-md"
        >
          Revenir à la source
        </Link>
      </div>
    </div>
  )
}
