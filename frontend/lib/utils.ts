export function formatPrice(euro: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(euro)
}

export function formatDate(date: string | number) {
  return new Date(date).toLocaleDateString('fr-FR')
}
