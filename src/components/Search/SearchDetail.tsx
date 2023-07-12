import { useRouter } from 'next/router'
import SearchJobDetail from './SearchJobDetail'
import SearchPlayDetail from './SearchPlayDetail'

export interface JobDetailProps {
  id: string
  area: string
}

export interface PlayDetailProps {
  id: string
}

export default function SearchDetail() {
  const { query } = useRouter()
  const uuid = query.uuid as string
  const isJob = query.isJob as string
  const area = query.area
  console.log(isJob)

  return (
    <>
      {isJob === 'true' ? (
        <SearchJobDetail id={uuid as string} area={area as string} />
      ) : (
        <SearchPlayDetail id={uuid} />
      )}
    </>
  )
}
