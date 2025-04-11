import { useAuth0 } from "@auth0/auth0-react"
import { Profile } from "./Profile"

export const Home: React.FC = () => {
  // const { loginWithRedirect, logout } = useAuth0()

  const onClickLogin = () => {
    // loginWithRedirect()
  }

  const onClickLogout = () => {
    // logout()
  }

  return (
    <div>
      home
      <div>请选择<ul><li>home</li><li>welcome</li><li>list</li></ul></div>

      <p><button onClick={onClickLogin} >去登录</button></p>

      <p><button onClick={onClickLogout} >注销</button></p>

      <Profile />
    </div>
  )
}