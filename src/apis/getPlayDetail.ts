import { GetPlayDetailRes } from '@/types/play'
import springClient from './springClient'

export const getPlayDetail = async (id: string): Promise<GetPlayDetailRes> => {
  try {
    const res = await springClient.get(`/play/detailview?uuid=${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
