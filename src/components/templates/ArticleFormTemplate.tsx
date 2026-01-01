'use client'

import MainLayout from './MainLayout'
import FormField from '@/components/molecules/FormField'
import MarkdownEditor from '@/components/molecules/MarkdownEditor'
import Button from '@/components/ui/Button'

type Props = {
  title: string
  content: string
  error?: string
  loading?: boolean
  onSubmit: () => void
  onChangeTitle: (val: string) => void
  onChangeContent: (val: string) => void
  submitLabel?: string
}

export default function ArticleFormTemplate({
  title,
  content,
  error,
  loading = false,
  onSubmit,
  onChangeTitle,
  onChangeContent,
  submitLabel = 'ارسال مقاله'
}: Props) {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primary">📝 {submitLabel}</h1>

        <FormField
          label="عنوان"
          value={title}
          onValueChange={onChangeTitle}
        />

        <MarkdownEditor
          label="محتوا"
          value={content}
          onChange={onChangeContent}
          error={error}
        />

        {error && <p className="text-error text-sm">{error}</p>}

        <Button
          variant="primary"
          onClick={onSubmit}
          disabled={loading}
        >
          {loading ? 'در حال ارسال...' : submitLabel}
        </Button>
      </div>
    </MainLayout>
  )
}