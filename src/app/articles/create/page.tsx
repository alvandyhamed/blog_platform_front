'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import FormField from '@/components/molecules/FormField'
import Button from '../../../components/ui/Button'
import MarkdownEditor from '@/components/molecules/MarkdownEditor'
import MainLayout from '../../../components/templates/MainLayout'

const articleSchema = z.object({
  title: z.string().min(5, 'عنوان باید حداقل ۵ کاراکتر باشد'),
  summary: z.string().min(10, 'خلاصه باید حداقل ۱۰ کاراکتر باشد'),
  content: z.string().min(20, 'محتوای مقاله باید حداقل ۲۰ کاراکتر باشد'),
})

type ArticleFormValues = z.infer<typeof articleSchema>

export default function ArticleCreatePage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<ArticleFormValues>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: '',
      summary: '',
      content: '',
    },
  })

  const onSubmit = (data: ArticleFormValues) => {
    console.log('🟢 Article submitted:', data)
    // برای اتصال به API آماده‌ست
  }

  return (
    <MainLayout>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-primary mb-4">✍️ ایجاد مقاله جدید</h1>

        <FormField
          label="عنوان"
          error={errors.title?.message}
          {...register('title')}
        />

        <FormField
          label="خلاصه"
          isTextarea
          error={errors.summary?.message}
          {...register('summary')}
        />

        <MarkdownEditor
          label="محتوا"
          value={watch('content')}
          onChange={(val) => setValue('content', val)}
          error={errors.content?.message}
        />

        <Button type="submit" variant="primary">
          انتشار مقاله
        </Button>
      </form>
    </MainLayout>
  )
}