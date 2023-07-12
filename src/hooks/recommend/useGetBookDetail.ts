import { getBookDetail } from '@/apis/getBookDetail'
import { GetBookDetailRes } from '@/types/bill'
import { useQuery } from 'react-query'

export default function useGetBookDetail(billId: string) {
  return useQuery<GetBookDetailRes>(
    ['getBookDetail', billId],
    () => getBookDetail(billId),
    {
      staleTime: 3000,
    },
  )
}
