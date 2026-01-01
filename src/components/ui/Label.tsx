// src/components/ui/Label.tsx
import clsx from 'clsx'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  htmlFor?: string
  className?: string
}

export default function Label({ children, htmlFor, className }: Props) {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx('text-sm font-medium text-text-primary block mb-1', className)}
    >
      {children}
    </label>
  )
}