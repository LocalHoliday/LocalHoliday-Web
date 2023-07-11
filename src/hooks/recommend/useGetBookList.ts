import { getBookList } from '@/apis/getBookList'
import { GetBookListRes } from '@/types/bill'
import { useQuery } from 'react-query'

export const useGetBookList = () => {
  return useQuery<GetBookListRes>(['getBookList'], getBookList, {
    staleTime: 300 * 1000,
  })
}
