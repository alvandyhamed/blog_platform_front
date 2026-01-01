// src/components/ui/Avatar.tsx
import clsx from 'clsx'

type Props = {
  src: string
  name?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
}

export default function Avatar({ src, alt = '', size = 'md', className }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx(
        'rounded-full object-cover border border-border',
        sizeMap[size],
        className
      )}
    />
  )
}