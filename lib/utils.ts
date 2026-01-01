// src/lib/utils.ts
export function formatDate(date: string | Date) {
    const d = new Date(date)
    return d.toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }