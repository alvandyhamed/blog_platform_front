// src/components/molecules/UserCard.tsx
import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'

type Props = {
  name: string
  email?: string
  avatar: string
  onClick?: () => void
}

export default function UserCard({ name, email, avatar, onClick }: Props) {
  return (
    <div className="flex items-center gap-4 bg-surface border border-border p-4 rounded">
      <Avatar src={avatar} name={name} />
      <div className="flex-1">
        <p className="text-sm font-bold text-text-primary">{name}</p>
        {email && <p className="text-xs text-text-secondary">{email}</p>}
      </div>
      {onClick && (
        <Button onClick={onClick} variant="secondary" className="text-sm">
          مدیریت
        </Button>
      )}
    </div>
  )
}