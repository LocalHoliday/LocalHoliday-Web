import useGetPlayDetail from '@/hooks/search/useGetPlayDetail'
import { PlayDetailProps } from './SearchDetail'
import styled from '@emotion/styled'
import SearchDetail from '../Common/Search/SearchDetail/SearchDetail'
import Spinner from '../Common/Spinner'

export default function SearchPlayDetail({ id }: PlayDetailProps) {
  const { data, isLoading } = useGetPlayDetail(id)
  console.log(data)

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
          </>
        )}
      </Container>
    </>
  )
}

const Container = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
