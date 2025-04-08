'use client'

import AdminShell from '@/components/AdminShell'
import DevPanel from '@/components/DevPanel'

export default function DebugPage() {
  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">🛠️ Panneau de Développement</h1>

      {process.env.NODE_ENV === 'development' ? (
        <>
          <DevPanel />
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            Tu es en mode <strong>développement</strong>. Utilise cette page pour tester, nettoyer ou afficher des infos internes.
          </p>
        </>
      ) : (
        <div className="p-4 border rounded-xl bg-red-50 dark:bg-red-900 text-red-800 dark:text-white shadow">
          ❌ Cette page n’est accessible qu’en environnement <strong>local</strong>.
        </div>
      )}
    </AdminShell>
  )
}
