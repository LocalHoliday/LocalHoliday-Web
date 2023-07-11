import { GetBookListRes } from '@/types/bill'
import nodeClient from './nodeClient'

export const getBookList = async (): Promise<GetBookListRes> => {
  try {
    const res = await nodeClient.get('/bill')
    return res.data
  } catch (error) {
    throw error
  }
}
