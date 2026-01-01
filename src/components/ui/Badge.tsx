// src/components/ui/Badge.tsx
import { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  variant?: 'success' | 'error' | 'default'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: Props) {
  return (
    <span
      className={clsx(
        'inline-block px-2 py-1 rounded text-xs font-medium',
        {
          'bg-success text-white': variant === 'success',
          'bg-error text-white': variant === 'error',
          'bg-border text-text-primary': variant === 'default',
        },
        className
      )}
    >
      {children}
    </span>
  )
}