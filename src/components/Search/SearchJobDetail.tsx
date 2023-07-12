import useGetJobDetail from '@/hooks/search/useGetJobDetail'
import { JobDetailProps } from './SearchDetail'
import Spinner from '../Common/Spinner'
import { useRouter } from 'next/router'
import SearchDetail from '../Common/Search/SearchDetail/SearchDetail'
import styled from '@emotion/styled'
import SearchJobMap from '../Common/Search/Map/SearchJobMap'

export default function SearchJobDetail({ id, area }: JobDetailProps) {
  const { query } = useRouter()
  //   const { data, isLoading } = useGetJobDetail(query.id as string, area)
  //   console.log(query)
  //   console.log(id)

  return (
    <>
      <Container>
        <div className="pt-50"></div>
        <SearchJobMap addr="ddd" />
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
