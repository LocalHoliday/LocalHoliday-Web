import { GetBookListRes } from '@/types/review'
import nodeClient from './nodeClient'

export const getBookList = async (): Promise<GetBookListRes> => {
  const res = await nodeClient.get('/review')
  return res.data
}
