import { useRouter } from 'next/router'
import SearchJobDetail from './SearchJobDetail'
import SearchPlayDetail from './SearchPlayDetail'

export interface JobDetailProps {
  id: string
}

export interface PlayDetailProps {
  id: string
}

export default function SearchDetail() {
  const { query } = useRouter()
  const id = query.id
  const uuid = query.uuid as string
  const isJob = query.isJob as string
  const area = query.area
  console.log(isJob)

  return (
    <>
      {isJob === 'true' ? (
        <SearchJobDetail id={id as string} />
      ) : (
        <SearchPlayDetail id={id as string} />
      )}
    </>
  )
}
