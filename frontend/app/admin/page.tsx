export const metadata = {
  title: 'Smithair – Espace Administrateur',
  description: 'Interface de gestion royale pour les produits, commandes et statistiques Smithair.',
  openGraph: {
    title: 'Smithair – Backoffice Royal 👑',
    description: 'Bienvenue dans l’interface d’administration Smithair.',
    url: 'http://localhost:3010/admin',
    siteName: 'Smithair',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smithair – Backoffice Royal 👑',
    description: 'Bienvenue dans l’espace admin Smithair.',
  }
}

import AdminShell from '@/components/AdminShell'

export default function AdminHome() {
  return (
    <AdminShell>
      <p className="text-lg">Bienvenue dans le royaume admin de Smithair ✨</p>
      <ul className="list-disc list-inside space-y-2">
        <li>📊 Statistiques de ventes</li>
        <li>👩🏾‍🦱 Utilisateurs et clientes</li>
        <li>💇🏽‍♀️ Perruques et produits</li>
        <li>📦 Commandes et livraisons</li>
      </ul>
    </AdminShell>
  )
}
