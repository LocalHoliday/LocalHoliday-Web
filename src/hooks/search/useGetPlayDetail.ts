import { getJobDetail } from '@/apis/getJobDetail'
import { getPlayDetail } from '@/apis/getPlayDetail'
import { GetJobDetailRes } from '@/types/job'
import { GetPlayDetailRes } from '@/types/play'
import { useQuery } from 'react-query'

export default function useGetPlayDetail(id: string) {
  return useQuery<GetPlayDetailRes>(
    ['getPlayDetail', id],
    () => getPlayDetail(id),
    {
      staleTime: 3000,
    },
  )
}
