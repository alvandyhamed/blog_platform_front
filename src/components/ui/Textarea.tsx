// src/components/ui/Textarea.tsx
import { TextareaHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={clsx(
        'w-full p-2 rounded border outline-none font-iran text-sm',
        'bg-surface text-text-primary border-border focus:border-primary',
        className
      )}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export default Textarea