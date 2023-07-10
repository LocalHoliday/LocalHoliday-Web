import { getBookList } from '@/apis/getBookList'
import { GetBookListRes } from '@/types/review'
import { useQuery } from '@tanstack/react-query'

export const useGetBookList = () => {
  return useQuery<GetBookListRes>(['getBookList'], getBookList, {
    staleTime: 300 * 1000,
  })
}
