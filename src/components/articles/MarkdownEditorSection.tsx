// src/components/articles/MarkdownEditorSection.tsx
'use client'

import MarkdownEditor from '@/components/molecules/MarkdownEditor'

export default function MarkdownEditorSection() {
  return (
    <MarkdownEditor
      label="مقاله"
      value="test"
      onChange={() => {}}
      error="این یک خطا است"
    />
  )
}