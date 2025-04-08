'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function TooltipProvider({ children }: Props) {
  return <TooltipPrimitive.Provider>{children}</TooltipPrimitive.Provider>
}
