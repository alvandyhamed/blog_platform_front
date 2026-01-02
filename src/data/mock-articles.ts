// mock-articles.ts
export type Article = {
    id: string
    title: string
    summary: string
    author: string
    created_at: string
  }
  
  export const mockArticles: Article[] = [
    {
      id: '1',
      title: 'امنیت در شبکه‌های اجتماعی',
      summary: 'بررسی تهدیدات امنیتی در استفاده روزمره از شبکه‌های اجتماعی مانند اینستاگرام و توییتر.',
      author: 'علی رضایی',
      created_at: '2023-12-20',
    },
    {
      id: '2',
      title: 'آشنایی با OWASP Top 10',
      summary: 'مقدمه‌ای جامع برای توسعه‌دهندگان در مورد ۱۰ آسیب‌پذیری مهم در توسعه وب بر اساس OWASP.',
      author: 'مریم کاظمی',
      created_at: '2023-12-15',
    },
  ]