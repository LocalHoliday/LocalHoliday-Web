import { getRecommendList } from '@/apis/getRecommend'
import { GetRecommendListRes } from '@/types/recommend'
import { useQuery } from 'react-query'

export const useGetRecommendList = () => {
  return useQuery<GetRecommendListRes>(['getRecommendList'], getRecommendList, {
    staleTime: 300 * 1000,
  })
}
