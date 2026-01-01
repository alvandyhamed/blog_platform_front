'use client'

import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ChangeEvent,
} from 'react'
import clsx from 'clsx'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'

type BaseProps = {
  label?: string
  error?: string
  className?: string
  isTextarea?: boolean
  value?: string
  onValueChange?: (val: string) => void  // ⭐ تغییر نام
}

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>
type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'>

type FormFieldProps = BaseProps & (InputProps | TextareaProps)

export default function FormField(props: FormFieldProps) {
  const { label, error, className, isTextarea, value, onValueChange, ...rest } = props

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onValueChange?.(e.target.value)
  }

  const shared = clsx(
    'w-full p-2 rounded border outline-none font-iran text-sm bg-surface text-text-primary',
    error ? 'border-error' : 'border-border focus:border-primary',
    className
  )

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm">{label}</label>}

      {isTextarea ? (
        <Textarea
          className={shared}
          value={value}
          onChange={handleChange}
          {...(rest as TextareaProps)}
        />
      ) : (
        <Input
          className={shared}
          value={value}
          onChange={handleChange}
          {...(rest as InputProps)}
        />
      )}

      {error && <span className="text-xs text-error">{error}</span>}
    </div>
  )
}