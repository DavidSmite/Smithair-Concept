#!/bin/bash

echo ""
echo "🩺 Smithair Fix Inspector"
echo "------------------------"
echo ""

# Vérifie si on est bien dans le projet
if [ ! -d "frontend" ]; then
  echo "❌ Tu n'es pas à la racine de Smithair-Concept. Va dans le dossier racine d'abord."
  exit 1
fi

# 1. Vérifie les fichiers critiques
check_file() {
  if [ -f "$1" ]; then
    echo "✅ $1 trouvé"
  else
    echo "❌ $1 manquant"
  fi
}

# 2. Vérifie les alias dans tsconfig
check_alias() {
  if grep -q '"@/*":' frontend/tsconfig.json; then
    echo "✅ Alias @ actif dans tsconfig.json"
  else
    echo "⚠️  Alias @ absent de tsconfig.json"
  fi
}

echo "📦 Vérification des fichiers importants :"
check_file frontend/app/layout.tsx
check_file frontend/components/AppShell.tsx
check_file frontend/components/CookieConsent.tsx
check_file frontend/globals.css
check_file frontend/tsconfig.json
echo ""

echo "🔍 Vérification alias @ :"
check_alias
echo ""

echo "📁 Vérifie présence des pages importantes :"
check_file frontend/app/[locale]/login/page.tsx
check_file frontend/app/[locale]/layout.tsx
check_file frontend/app/[locale]/politique-de-confidentialite/page.tsx
echo ""

echo "🎉 Inspection terminée. Si tout est ✅, tu peux te considérer prêt à régner. 👑"
