import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { getItem, setItem } from '@/utils/storage'
/**
 * 获取时间戳
 */
export const getTimeStamp = () => {
  return getItem(TIME_STAMP)
}

export const setTimeStamp = () => {
  setItem(TIME_STAMP, Date.now())
}

/**
 * 是否超时
 */
export const isCheckTimeout = () => {
  const currentTime = Date.now()
  const timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
