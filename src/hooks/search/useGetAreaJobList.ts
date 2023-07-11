import { getAreayJobList } from '@/apis/getAreaJobList'
import { GetAreaJobRes } from '@/types/area'
import { useQuery } from 'react-query'

export default function useGetAreaJobList(loc: string) {
  return useQuery<GetAreaJobRes>(['getAreaJob'], () => getAreayJobList(loc), {
    staleTime: 3000,
  })
}
