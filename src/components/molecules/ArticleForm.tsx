// src/components/molecules/ArticleForm.tsx
'use client'

import { useState } from 'react'
import FormField from './FormField'
import MarkdownEditor from './MarkdownEditor'
import Button from '../ui/Button'

type Props = {
  onSubmit: (data: { title: string; body: string }) => void
  loading?: boolean
  error?: string
  initialData?: {
    title: string
    body: string
  }
}

export default function ArticleForm({ onSubmit, loading, error, initialData }: Props) {
  const [title, setTitle] = useState(initialData?.title || '')
  const [body, setBody] = useState(initialData?.body || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ title, body })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        label="عنوان مقاله"
        value={title}
        onValueChange={(val: string) => setTitle(val)}
        error={!title ? 'عنوان الزامی است' : ''}
      />

      <MarkdownEditor
        label="محتوای مقاله"
        value={body}
        onChange={(val) => setBody(val)}
        error={!body ? 'محتوا الزامی است' : ''}
      />

      {error && <p className="text-error text-sm">{error}</p>}

      <Button variant="primary" type="submit" disabled={loading}>
        {loading ? 'در حال ارسال...' : 'ارسال مقاله'}
      </Button>
    </form>
  )
}