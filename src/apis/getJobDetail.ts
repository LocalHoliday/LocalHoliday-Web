import nodeClient from './nodeClient'
import { GetJobDetailRes } from '@/types/job'

export const getJobDetail = async (id: string): Promise<GetJobDetailRes> => {
  try {
    const res = await nodeClient.get(`/job/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
