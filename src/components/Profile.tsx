import { User } from "@auth0/auth0-react"

interface Props {
  user?: User
}

export const Profile: React.FC<Props> = (props) => {
  const { user } = props
  return (
    <div>
      Profile
    </div>
  )
}