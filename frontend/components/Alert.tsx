'use client'

type AlertProps = {
  type: 'success' | 'error' | 'info'
  title: string
  description?: string
}

export default function Alert({ type, title, description }: AlertProps) {
  const colorMap = {
    success: 'bg-green-100 text-green-800 border-green-300',
    error: 'bg-red-100 text-red-800 border-red-300',
    info: 'bg-blue-100 text-blue-800 border-blue-300',
  }

  return (
    <div className={`p-4 border rounded-xl ${colorMap[type]} mb-4`}>
      <strong className="block">{title}</strong>
      {description && <p className="text-sm mt-1">{description}</p>}
    </div>
  )
}
