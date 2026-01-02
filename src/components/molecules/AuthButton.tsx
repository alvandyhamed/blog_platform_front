// src/components/molecules/AuthButton.tsx

import { ReactNode } from 'react'
import Button from '../ui/Button'
import Image from 'next/image'
import clsx from 'clsx'

type Props = {
  onClick?: () => void
  children?: ReactNode
  disabled?: boolean
  className?: string
}

export default function AuthButton({ onClick, children = 'ورود با گوگل', disabled, className }: Props) {
  const Component = onClick ? 'button' : 'div'
  return (
    <Component
      onClick={onClick}
      className={clsx('flex items-center gap-2 font-iran px-4 py-2 bg-secondary text-text-primary rounded hover:bg-opacity-80 transition-colors', className)}
      disabled={disabled}
    >
      <Image
        src="/icons/google.svg"
        alt="google"
        width={18}
        height={18}
      />
      {children}
    </Component>
  )
}