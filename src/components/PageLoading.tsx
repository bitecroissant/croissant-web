import { Icon } from "./Icon"
import cs from 'classnames'
import s from './PageLoading.module.scss'

interface Props {
  className?: string
  message?: string
}

export const PageLoading: React.FC<Props> = (props) => {
  const { className, message } = props
  return (
    <div className={ cs(className, 'absolute top-0 h-screen w-screen flex flex-col justify-center items-center bg-white') }>
      <Icon name="loading" className="motion-safe:animate-spin" />
      <p className={cs(s.loadingText, 'mt-[16px]')}>{ message || '数据烘培中...' }</p>
    </div>
  )
}