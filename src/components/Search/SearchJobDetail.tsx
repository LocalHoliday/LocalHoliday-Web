import useGetJobDetail from '@/hooks/search/useGetJobDetail'
import { JobDetailProps } from './SearchDetail'

export default function SearchJobDetail({ id, area }: JobDetailProps) {
  const { data, isLoading } = useGetJobDetail(id, area)
  console.log('일')
  return <></>
}
