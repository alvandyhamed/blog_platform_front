// src/components/ui/Input.tsx
import { InputHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
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

Input.displayName = 'Input'

export default Input