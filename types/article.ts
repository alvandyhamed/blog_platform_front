export type Article = {
    id: string
    title: string
    summary: string
    content: string
    author: {
      name: string
      avatar: string
    }
    createdAt: string
  }