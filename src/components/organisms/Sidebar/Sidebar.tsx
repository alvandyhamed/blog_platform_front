type Tag = {
    id: string
    name: string
  }
  
  type ArticlePreview = {
    id: string
    title: string
  }
  
  type Props = {
    tags?: Tag[]
    recentArticles?: ArticlePreview[]
  }
  
  export default function Sidebar({ tags = [], recentArticles = [] }: Props) {
    return (
      <aside className="w-full lg:w-1/3 space-y-6">
        {tags.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">دسته‌بندی‌ها</h3>
            <ul className="space-y-1">
              {tags.map((tag) => (
                <li
                  key={tag.id}
                  className="text-sm text-primary hover:underline cursor-pointer"
                >
                  #{tag.name}
                </li>
              ))}
            </ul>
          </div>
        )}
  
        {recentArticles.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">آخرین مقالات</h3>
            <ul className="space-y-1">
              {recentArticles.map((article) => (
                <li
                  key={article.id}
                  className="text-sm text-text-primary hover:underline cursor-pointer"
                >
                  {article.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    )
  }