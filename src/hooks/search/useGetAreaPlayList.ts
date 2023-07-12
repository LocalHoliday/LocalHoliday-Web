import { getAreayPlayList } from '@/apis/getAreaPlayList'
import { GetAreaPlayRes } from '@/types/area'
import { useQuery } from 'react-query'

export default function useGetAreaPlayList(loc: string) {
  return useQuery<GetAreaPlayRes>(
    ['getAreaPlay', loc],
    () => getAreayPlayList(loc),
    {
      staleTime: 3000,
    },
  )
}
