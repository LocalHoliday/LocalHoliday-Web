import { GetAreaPlayRes } from '@/types/area'
import nodeClient from './nodeClient'
import springClient from './springClient'

export const getAreayPlayList = async (
  loc: string,
): Promise<GetAreaPlayRes> => {
  try {
    const res = await springClient.get(`/play?loc=${loc}`)
    return res.data
  } catch (error) {
    throw error
  }
}
