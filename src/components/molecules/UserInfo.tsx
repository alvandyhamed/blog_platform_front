// src/components/molecules/UserInfo.tsx
import Avatar from '@/components/ui/Avatar'

type Props = {
  name: string
  avatar: string
  className?: string
}

export default function UserInfo({ name, avatar, className }: Props) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Avatar src={avatar} name={name} />
      <span className="text-sm font-medium text-text-primary font-iran">{name}</span>
    </div>
  )
}