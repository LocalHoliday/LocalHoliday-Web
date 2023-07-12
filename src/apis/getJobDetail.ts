import nodeClient from './nodeClient'
import { GetJobDetailRes } from '@/types/job'

export const getJobDetail = async (
  id: string,
  place: string,
): Promise<GetJobDetailRes> => {
  try {
    const res = await nodeClient.get(`/job/${id}?place=${place}`)
    return res.data
  } catch (error) {
    throw error
  }
}
