// backend/config/cors.js

const allowedOrigins = []
for (let port = 3000; port <= 3040; port++) {
  allowedOrigins.push(`http://localhost:${port}`)
}

export const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      console.log(`🛡️ CORS autorisé : ${origin || 'inconnu (sans origin)'}`)
      callback(null, true)
    } else {
      console.warn(`🚫 CORS refusé : ${origin}`)
      callback(new Error('Non autorisé par CORS'))
    }
  },
  credentials: true,
}
