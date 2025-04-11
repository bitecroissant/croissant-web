import { User } from "@auth0/auth0-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface Props {
  user?: User
}

export const Profile: React.FC<Props> = (props) => {
  const { user } = props
  if (user) {
    return (<div className="flex items-center ml-[16px]">
      <Avatar>
        <AvatarImage src={user.picture} />
        <AvatarFallback>{user.name}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col ml-[16px]">
        <p>{ user.name }</p>
        <p>{ user.email }</p>
      </div>
    </div>)
  } else {
    return (<p>null</p>)
  }
}