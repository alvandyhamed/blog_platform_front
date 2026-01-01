'use client'

import { ChangeEvent } from 'react'

type Props = {
  label?: string
  value: string
  onChange: (val: string) => void
  error?: string
}

export default function MarkdownEditor({ label, value, onChange, error }: Props) {
  return (
    <div>
      {label && <label className="mb-2 block">{label}</label>}
      <textarea
        rows={10}
        className="w-full border border-border p-2 rounded text-text-primary bg-surface"
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
      />
      {error && <p className="text-error mt-1 text-sm">{error}</p>}
    </div>
  )
}