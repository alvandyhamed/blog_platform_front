// src/components/molecules/TagList.tsx
import React from 'react'
import clsx from 'clsx'

type Props = {
  tags: string[]
  onClick?: (tag: string) => void
  className?: string
}

export default function TagList({ tags, onClick, className }: Props) {
  return (
    <div className={clsx('flex flex-wrap gap-2', className)}>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onClick?.(tag)}
          className="px-3 py-1 text-sm rounded bg-surface text-text-primary border border-border hover:bg-background transition"
        >
          #{tag}
        </button>
      ))}
    </div>
  )
}