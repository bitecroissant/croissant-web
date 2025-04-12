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

  

  const onClickLogin = () => {
    loginWithRedirect()
  }

  const onClickLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } })
  }

  const onClickLog = async () => {
    window.console.log(await getAccessTokenSilently())
  }

  if (isLoading) {
    return <PageLoading />
  }

  return (
    <div>
      <h3>Croissang Web App Home Page.</h3>

      { isAuthenticated && <Profile user={user} /> }

      <div>请选择<ul><li>home</li><li>welcome</li><li>list</li></ul></div>

      <p><Button onClick={onClickLogin} >去登录</Button></p>

      <p><Button onClick={onClickLogout} >注销</Button></p>

      <p><Button onClick={onClickLog} >打印</Button></p>

    </div>
  )
}