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
  return (
    <Button
      onClick={onClick}
      variant="secondary"
      disabled={disabled}
      className={clsx('flex items-center gap-2 font-iran', className)}
    >
      <Image
        src="/icons/google.svg"
        alt="google"
        width={18}
        height={18}
      />
      {children}
    </Button>
  )
}