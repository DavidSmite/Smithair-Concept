'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type TooltipContextType = {
  enabled: boolean
  toggle: () => void
}

const TooltipContext = createContext<TooltipContextType | undefined>(undefined)

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('adminTips')
    if (saved === 'off') setEnabled(false)
  }, [])

  const toggle = () => {
    const newVal = !enabled
    setEnabled(newVal)
    localStorage.setItem('adminTips', newVal ? 'on' : 'off')
  }

  return (
    <TooltipContext.Provider value={{ enabled, toggle }}>
      {children}
    </TooltipContext.Provider>
  )
}

export function useTooltips() {
  const context = useContext(TooltipContext)
  if (!context) throw new Error('useTooltips must be used within TooltipProvider')
  return context
}
