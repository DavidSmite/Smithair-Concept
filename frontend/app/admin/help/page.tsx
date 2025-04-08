'use client'

import { TooltipProvider } from '@/components/ui/tooltip'

export default function HelpPage() {
  return (
    <TooltipProvider>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Centre d’aide</h1>
        <p className="text-gray-600 mb-2">
          Bienvenue dans l’espace d’assistance de Smithair Concept. Ici, vous pouvez consulter les guides, FAQ et
          astuces pour gérer votre boutique.
        </p>
        <ul className="list-disc list-inside text-gray-500">
          <li>Ajouter ou modifier un produit</li>
          <li>Suivre les commandes</li>
          <li>Exporter les statistiques</li>
          <li>Gérer les utilisateurs</li>
        </ul>
      </div>
    </TooltipProvider>
  )
}
