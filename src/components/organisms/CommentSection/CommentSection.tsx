'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import FormField from '@/components/molecules/FormField'

type Comment = {
  id: string
  author: string
  message: string
}

type Props = {
  comments: Comment[]
}

export default function CommentSection({ comments }: Props) {
  const { data: session } = useSession()
  const [message, setMessage] = useState('')
  const [allComments, setAllComments] = useState(comments)

  const handleAddComment = () => {
    if (!message.trim()) return
    const newComment = {
      id: Date.now().toString(),
      author: session?.user?.name ?? 'کاربر ناشناس',
      message,
    }

    setAllComments((prev) => [...prev, newComment])
    setMessage('')
    // اینجا باید call به API زده بشه
  }

  return (
    <div className="space-y-4 mt-8">
      <h3 className="text-lg font-semibold">نظرات</h3>

      {allComments.map((comment) => (
        <div key={comment.id} className="border border-border rounded p-3 bg-surface">
          <p className="text-sm text-text-secondary">{comment.author}</p>
          <p className="text-text-primary">{comment.message}</p>
        </div>
      ))}

      {session && (
        <div className="space-y-2">
          <FormField
            isTextarea
            value={message}
            onValueChange={setMessage}
            label="نظر خود را بنویسید"
            rows={5}
          />
          <Button onClick={handleAddComment}>ارسال نظر</Button>
        </div>
      )}
    </div>
  )
}