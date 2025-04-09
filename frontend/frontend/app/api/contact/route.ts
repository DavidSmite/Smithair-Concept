import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

...

try {
  await transporter.sendMail({
    from: `"Smithair Contact" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO,
    subject: `📨 Nouveau message depuis Smithair`,
    html: `
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Message :</strong></p>
      <p>${message}</p>
    `,
  })

  // 🧠 LOGGING LOCAL
  const logPath = path.join(process.cwd(), 'mail-logs.txt')
  const logEntry = `[${new Date().toISOString()}] ${name} <${email}> : ${message}\n\n`
  fs.appendFileSync(logPath, logEntry)

  return NextResponse.json({ success: true })
}
