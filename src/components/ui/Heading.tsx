// src/components/ui/Heading.tsx
import { ReactNode } from 'react'
import clsx from 'clsx'
import { JSX } from 'react/jsx-runtime'

type Props = {
  children: ReactNode
  level?: 1 | 2 | 3 | 4
  className?: string
}

export default function Heading({ children, level = 1, className }: Props) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const baseStyles: Record<number, string> = {
    1: 'text-4xl font-bold',
    2: 'text-3xl font-semibold',
    3: 'text-2xl font-medium',
    4: 'text-xl font-normal',
  }

  return <Tag className={clsx(baseStyles[level], className)}>{children}</Tag>
}