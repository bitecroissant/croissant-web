import { useAuth0 } from "@auth0/auth0-react"
import s from './Profile.module.css'

export const Profile: React.FC = () => {
  // const { isLoading, isAuthenticated, user, getAccessTokenSilently } = useAuth0()

  // if (isLoading) {
  if (true) {
    return <div className={s.loadingText}> Loading </div>
  }

  return (
    <div>Profile </div>
  )
}