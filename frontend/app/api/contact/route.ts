import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    console.log('📨 Données reçues :', { name, email, message })

    // Affiche les variables d'environnement
    console.log('🔐 EMAIL_FROM:', process.env.EMAIL_FROM)
    console.log('🔐 EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ présent' : '❌ manquant')
    console.log('📩 EMAIL_TO:', process.env.EMAIL_TO)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Message de ${name}`,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br>${message}</p>
      `,
    })

    console.log('✅ Mail envoyé avec succès')
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('❌ Erreur d’envoi :', err)
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 })
  }
}
