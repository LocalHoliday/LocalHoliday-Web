import { getJobDetail } from '@/apis/getJobDetail'
import { GetJobDetailRes } from '@/types/job'
import { useQuery } from 'react-query'

export default function useGetJobDetail(id: string) {
  return useQuery<GetJobDetailRes>(
    ['getJobDetail', id],
    () => getJobDetail(id),
    {
      staleTime: 3000,
    },
  )
}
