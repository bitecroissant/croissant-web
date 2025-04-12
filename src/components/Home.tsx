import { Button } from "@/components/ui/button"

import { useAuth0 } from "@auth0/auth0-react"
import useSWR from 'swr'
import axios from 'axios'

import { Profile } from "./Profile"
import { PageLoading } from "./PageLoading"
import { useEffect, useState } from "react"

const axiosInstance = axios.create({
  // baseURL: isDev ? 'http://127.0.0.1:8787' : 'https://api.longislandicedteanight.xyz',
  baseURL: 'http://127.0.0.1:8888',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
})

axiosInstance.interceptors.request.use((config) => {
  const ak = localStorage.getItem('access_token') || ''
  config.headers = config.headers || {}
  if (config.headers && ak) { config.headers.Authorization = `Bearer ${ak}` }
  return config
})

type EventType = {
  id: string
  name: string
  // 循环
  isLoop: boolean
  // 置顶
  isPin: boolean
  gmt_create: string
  gmt_modified: string
}

const fetcher = (path: string) => {
  return axiosInstance.get<EventType[]>(path)
}

export const Home: React.FC = () => {
  // auth0
  const {
    loginWithRedirect, logout,
    isLoading, isAuthenticated, user,
    getAccessTokenSilently
  } = useAuth0()

  useEffect(() => {
    if (isAuthenticated) {
      _setAk2LocalStorage()
    }
  }, [isAuthenticated])

  const _setAk2LocalStorage = async () => {
    const accessToken = await getAccessTokenSilently()
    localStorage.setItem('access_token', accessToken)
  }

  const onClickLogin = () => {
    loginWithRedirect()
  }

  const onClickLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } })
  }

  const [ak, setAk] = useState('')

  const onClickLog = async () => {
    const _ak = await getAccessTokenSilently()
    window.console.log(_ak)
    setAk(_ak)
  }


  // useSWR
  // const { data, error, isLoading: isLoadingData } = useSWR('/events', fetcher)

  // if (error) return <div>failed to load</div>

  // if (isLoading || isLoadingData) {
  //   return <PageLoading />
  // }

  return (
    <div>
      <h3>Croissang Web App Home Page.</h3>

      {isAuthenticated && <Profile user={user} />}

      <p>user {JSON.stringify(user)}</p>
      <p>ak {ak}</p>

      {/* <p>{JSON.stringify(data)}</p> */}

      <p><Button onClick={onClickLogin} >去登录</Button></p>

      <p><Button onClick={onClickLogout} >注销</Button></p>

      <p><Button onClick={onClickLog} >打印</Button></p>

    </div>
  )
}