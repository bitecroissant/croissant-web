import { useRouteError, useNavigate } from "react-router-dom"

export const ErrorPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError()
  console.log(error)

  const nav = useNavigate()

  const goHome = () => {
    nav('/')
  }

  return (
    <div id="error-page">
      <h1>👻 哎呦（Oops!）</h1>
      <p>遇到了一个错误。（Sorry, an unexpected error has occurred.）</p>
      <p>
        <i>{ error.statusText || error.message }</i>
      </p>
      <button onClick={goHome}>带我回首页</button>
    </div>
  )
}