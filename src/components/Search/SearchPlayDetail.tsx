import useGetPlayDetail from '@/hooks/search/useGetPlayDetail'
import { PlayDetailProps } from './SearchDetail'
import styled from '@emotion/styled'
import SearchDetail from '../Common/Search/SearchDetail/SearchDetail'
import Spinner from '../Common/Spinner'
import SearchPlayMap from '../Common/Search/Map/SearchPlayMap'
import { useRouter } from 'next/router'

export default function SearchPlayDetail({ id }: PlayDetailProps) {
  const { query } = useRouter()
  const { data, isLoading } = useGetPlayDetail(query.id as string)
  console.log(query)
  console.log(id)

  return (
    <>
      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <SearchDetail
              id={data?.result.uuid as string}
              isWork={false}
              name={data?.result.name as string}
              location={data?.result.addr as string}
              photo={data?.result.photo as string}
              lon={data?.result.lon}
              lat={data?.result.lat}
              info={data?.result.info}
            />
            <div className="pt-50"></div>
            <SearchPlayMap
              lat={data?.result.lat as string}
              lng={data?.result.lon as string}
            />
          </>
        )}
      </Container>
    </>
  )
}

const Container = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  flex-direction: column;
`
