'use client'

import AdminShell from '@/components/AdminShell'
import { useEffect, useState } from 'react'

type Message = {
  timestamp: string
  name: string
  email: string
  message: string
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    fetch('/mail-log.json')
      .then((res) => res.json())
      .then((data) => setMessages(data))
  }, [])

  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">📬 Messages reçus</h1>
      <div className="space-y-6">
        {messages.length === 0 && (
          <p className="text-gray-500 text-sm italic">Aucun message enregistré.</p>
        )}
        {messages.map((msg, i) => (
          <div key={i} className="p-4 border rounded bg-white dark:bg-gray-800 shadow-sm">
            <p className="text-xs text-gray-400">🕒 {new Date(msg.timestamp).toLocaleString()}</p>
            <p><strong>👤 {msg.name}</strong> – <em>{msg.email}</em></p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{msg.message}</p>
          </div>
        ))}
      </div>
    </AdminShell>
  )
}
