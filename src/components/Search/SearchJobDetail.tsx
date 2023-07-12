import useGetJobDetail from '@/hooks/search/useGetJobDetail'
import { JobDetailProps } from './SearchDetail'
import Spinner from '../Common/Spinner'
import { useRouter } from 'next/router'
import SearchDetail from '../Common/Search/SearchDetail/SearchDetail'
import styled from '@emotion/styled'
import SearchJobMap from '../Common/Search/Map/SearchJobMap'

export default function SearchJobDetail({ id }: JobDetailProps) {
  const { query } = useRouter()
  const { data, isLoading } = useGetJobDetail(query.id as string)
  console.log(query)
  console.log(id)

  return (
    <>
      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Container>
              <SearchDetail
                id={data?.job.uuid as string}
                workPay={data?.job.pay as number}
                isWork={true}
                name={data?.job.name as string}
                location={data?.job.addr as string}
                photo={data?.job.photo as string}
                hostPhone={data?.job.host_phone as string}
                workDate={`${data?.job.startTime.substring(
                  0,
                  10,
                )} ~ ${data?.job.endTime.substring(0, 10)}`}
              />
              <div className="pt-50"></div>
              <SearchJobMap addr={data?.job.addr as string} />
            </Container>
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
