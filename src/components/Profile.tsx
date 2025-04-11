import { useAuth0 } from "@auth0/auth0-react"
import s from './Profile.module.css'
import { Icon } from "./Icon"

export const Profile: React.FC = () => {
  // const { isLoading, isAuthenticated, user, getAccessTokenSilently } = useAuth0()

  // if (isLoading) {
  if (true) {
    return <Icon name="loading" />
  }

  return (
    <div>Profile </div>
  )
}