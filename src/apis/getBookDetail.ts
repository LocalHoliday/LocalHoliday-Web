import { GetBookDetailRes } from '@/types/bill'
import nodeClient from './nodeClient'

export const getBookDetail = async (
  billId: string,
): Promise<GetBookDetailRes> => {
  try {
    const res = await nodeClient.get(`/bill/${billId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
