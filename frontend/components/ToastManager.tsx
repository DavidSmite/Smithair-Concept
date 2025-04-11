'use client'

import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useToastStore } from '@/lib/toastStore'

export default function ToastManager() {
  const { message, type, show, reset } = useToastStore()

  useEffect(() => {
    if (show) {
      if (type === 'success') {
        toast.success(message)
      } else {
        toast.error(message)
      }
      reset()
    }
  }, [show, type, message, reset])

  return null
}
