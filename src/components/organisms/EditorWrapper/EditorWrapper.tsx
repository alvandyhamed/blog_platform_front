'use client'

import { useState } from 'react'
import FormField from '@/components/molecules/FormField'
import Button from '@/components/ui/Button'
import MarkdownEditor from '@/components/molecules/MarkdownEditor'

type Props = {
  initialTitle?: string
  initialContent?: string
  onSubmit: (data: { title: string; content: string }) => void
}

export default function EditorWrapper({ initialTitle = '', initialContent = '', onSubmit }: Props) {
  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState(initialContent)
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!title || !content) {
      setError('پر کردن همه فیلدها الزامی است.')
      return
    }

    setError('')
    onSubmit({ title, content })
  }

  return (
    <div className="space-y-4">
      <FormField
        label="عنوان مقاله"
        value={title}
        onValueChange={(val) => setTitle(val)}
        error={!title ? 'عنوان الزامی است' : ''}
      />

      <MarkdownEditor
        label="متن مقاله"
        value={content}
        onChange={(val) => setContent(val)}
        error={!content ? 'متن الزامی است' : ''}
      />

      {error && <p className="text-error text-sm">{error}</p>}

      <Button variant="primary" onClick={handleSubmit}>
        ثبت مقاله
      </Button>
    </div>
  )
}