import { GetAreaJobRes, GetAreaPlayRes } from '@/types/area'
import nodeClient from './nodeClient'
import springClient from './springClient'

export const getAreayJobList = async (loc: string): Promise<GetAreaJobRes> => {
  try {
    const res = await nodeClient.get(`/job?place=${loc}`)
    return res.data
  } catch (error) {
    throw error
  }
}
