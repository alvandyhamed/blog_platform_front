// src/components/ui/Button.tsx
'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'

type Variant = 'primary' | 'secondary' | 'outline' | 'danger'

type Props = {
  children: ReactNode
  onClick?: () => void
  variant?: Variant
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  className,
  type = 'button',
  disabled = false,
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'font-iran px-4 py-2 rounded font-medium text-sm border transition-colors duration-200',
        {
          'bg-primary text-white border-primary hover:opacity-90': variant === 'primary',
          'bg-surface text-text-primary border-border hover:bg-background': variant === 'secondary',
          'border text-text-primary hover:bg-border': variant === 'outline',
          'bg-error text-white border-error hover:opacity-90': variant === 'danger',
        },
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  )
}