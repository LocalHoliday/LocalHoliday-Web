import { getJobDetail } from '@/apis/getJobDetail'
import { GetJobDetailRes } from '@/types/job'
import { useQuery } from 'react-query'

export default function useGetJobDetail(id: string, place: string) {
  return useQuery<GetJobDetailRes>(
    ['getJobDetail'],
    () => getJobDetail(id, place),
    {
      staleTime: 3000,
    },
  )
}
