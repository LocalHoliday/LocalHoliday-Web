import springClient from './springClient'
import { GetRecommendListRes } from '@/types/recommend'

export const getRecommendList = async (): Promise<GetRecommendListRes> => {
  const res = await springClient.get('/recommend')
  return res.data
}
