import Button from '@/components/ui/Button'

type AdminArticle = {
  id: string
  title: string
  author: string
  createdAt: string
  status: 'pending' | 'approved' | 'rejected'
}

type Props = {
  articles: AdminArticle[]
  onApprove: (id: string) => void
  onReject: (id: string) => void
  onEdit?: (id: string) => void
}

export default function AdminPanel({ articles, onApprove, onReject, onEdit }: Props) {
  if (!articles.length) {
    return <p className="text-center text-text-secondary">مقاله‌ای برای بررسی وجود ندارد.</p>
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-border text-sm">
        <thead>
          <tr className="bg-surface border-b border-border text-text-primary">
            <th className="px-4 py-2 text-right">عنوان</th>
            <th className="px-4 py-2 text-right">نویسنده</th>
            <th className="px-4 py-2 text-right">تاریخ</th>
            <th className="px-4 py-2 text-right">وضعیت</th>
            <th className="px-4 py-2 text-right">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id} className="border-t border-border">
              <td className="px-4 py-2">{article.title}</td>
              <td className="px-4 py-2">{article.author}</td>
              <td className="px-4 py-2">{article.createdAt}</td>
              <td className="px-4 py-2">{article.status}</td>
              <td className="px-4 py-2 space-x-2">
                <Button variant="primary" onClick={() => onApprove(article.id)}>
                  تأیید
                </Button>
                <Button variant="danger" onClick={() => onReject(article.id)}>
                  حذف
                </Button>
                {onEdit && (
                  <Button variant="secondary" onClick={() => onEdit(article.id)}>
                    ویرایش
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}