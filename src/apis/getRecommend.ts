import { GetRecommendListRes } from '@/types/recommend'
import springClient from './springClient'

export const getRecommendList = async (): Promise<GetRecommendListRes> => {
  try {
    const res = await springClient.get('/recommend')
    return res.data
  } catch (error) {
    throw error
  }
}
