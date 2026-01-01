// src/components/molecules/SearchInput.tsx
'use client'

import { ChangeEvent } from 'react'
import { FiSearch } from 'react-icons/fi'
import clsx from 'clsx'
import Input from '../ui/Input'

type Props = {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  className?: string
}

export default function SearchInput({ placeholder = 'جستجو...', value, onChange, className }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div
      className={clsx(
        'flex items-center border border-border rounded bg-surface text-text-primary px-3 py-2',
        className
      )}
    >
      <FiSearch className="text-xl text-text-secondary mr-2" />
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="bg-transparent outline-none flex-1 font-iran text-sm"
      />
    </div>
  )
}