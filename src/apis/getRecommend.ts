import { GetRecommendListRes } from '@/types/recommend'
import apiClient from './client'

export const getRecommendList = async (): Promise<GetRecommendListRes> => {
  try {
    const res = await apiClient.get('/api/spring/recommend')
    return res.data
  } catch (error) {
    throw error
  }
}
