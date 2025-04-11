import { Button } from "@/components/ui/button"

import { useAuth0 } from "@auth0/auth0-react"
import { Profile } from "./Profile"
import { PageLoading } from "./PageLoading"

export const Home: React.FC = () => {
  const {
    loginWithRedirect, logout,
    isLoading, isAuthenticated, user,
    getAccessTokenSilently
  } = useAuth0()

  if (isLoading) {
    return <PageLoading />
  }

  const onClickLogin = () => {
    loginWithRedirect()
  }

  const onClickLogout = () => {
    logout()
  }

  return (
    <div>
      home
      <div>请选择<ul><li>home</li><li>welcome</li><li>list</li></ul></div>

      <p><Button onClick={onClickLogin} >去登录</Button></p>

      <p><Button onClick={onClickLogout} >注销</Button></p>

      { isAuthenticated && <Profile user={user} /> }

      { getAccessTokenSilently() }
    </div>
  )
}