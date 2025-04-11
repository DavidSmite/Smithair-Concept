'use client'

import { create } from 'zustand'

type ToastState = {
  message: string
  type: 'success' | 'error'
  show: boolean
  triggerToast: (message: string, type?: 'success' | 'error') => void
  reset: () => void
}

export const useToastStore = create<ToastState>((set) => ({
  message: '',
  type: 'success',
  show: false,
  triggerToast: (message, type = 'success') =>
    set({ message, type, show: true }),
  reset: () => set({ show: false }),
}))
