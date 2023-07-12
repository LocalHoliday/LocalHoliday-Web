import { useRouter } from 'next/router'
import BreadCrumb from '../Common/BreadCrumb'
import styled from '@emotion/styled'
import { COLORS } from '@/styles/colors'
import { useEffect, useState } from 'react'
import useGetAreaPlayList from '@/hooks/search/useGetAreaPlayList'
import useGetAreaJobList from '@/hooks/search/useGetAreaJobList'
import Spinner from '../Common/Spinner'
import { workerData } from 'worker_threads'
import SearchItem from '../Common/Search/SearchItem/SearchItem'
import { IAreaPlayItem } from '@/types/area'

interface TabBarProps {
  click: boolean
}

export default function SearchArea() {
  const { query } = useRouter()
  console.log(query)
  const area = query.id
  const areaId = query.areaId
  const [areaName, setAreaName] = useState<string>('')
  useEffect(() => {
    if (area === '경기') {
      setAreaName('경기도')
    } else if (area === '강원') {
      setAreaName('강원도')
    } else if (area === '충청') {
      setAreaName('충청도')
    } else {
      setAreaName(area as string)
    }
  }, [query])
  const [playClick, setPlayClick] = useState<boolean>(false)
  const [workClick, setWorkClick] = useState<boolean>(true)
  const { data: playData, isLoading: isPlayLoading } = useGetAreaPlayList(
    area as string,
  )
  const { data: jobData, isLoading: isJobLoading } = useGetAreaJobList(
    area as string,
  )
  const playList: IAreaPlayItem[] = []

  playData?.result.foodDTOList.map((item) => playList?.push(item))
  playData?.result.houseDTOList.map((item) => playList?.push(item))
  playData?.result.tourDTOList.map((item) => playList?.push(item))

  const onPlayClick = () => {
    setPlayClick(true)
    setWorkClick(false)
  }
  const onWorkClick = () => {
    setPlayClick(false)
    setWorkClick(true)
  }

  return (
    <>
      {isPlayLoading || isJobLoading ? (
        <Spinner />
      ) : (
        <>
          <BreadCrumb
            colorIdx={3}
            isArea={true}
            title={`${areaName}에서 로컬홀리데이를 즐겨보세요`}
            subTitle=""
          />
          <TabBarContainer>
            <TabBarList>
              <TabBarItem click={workClick} onClick={onWorkClick}>
                로컬 일거리
              </TabBarItem>
              <div className="pl-40"></div>
              <TabBarItem click={playClick} onClick={onPlayClick}>
                로컬 놀거리
              </TabBarItem>
            </TabBarList>
          </TabBarContainer>
          <ContentContainer>
            {workClick ? (
              <>
                <div className="row col-lg-12">
                  <div
                    className="col"
                    style={{ display: 'flex', flexWrap: 'wrap' }}
                  >
                    {jobData?.jobs.map((item) => (
                      <SearchItem
                        key={item.uuid}
                        id={item.uuid}
                        isWork={true}
                        area={area as string}
                        name={item.name}
                        location={item.addr}
                        workPay={item.pay}
                        photo={item.photo}
                        workDate={`${item.startTime.substring(
                          0,
                          10,
                        )} ~ ${item.endTime.substring(0, 10)}`}
                      />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="row col-lg-12">
                  <div
                    className="col"
                    style={{ display: 'flex', flexWrap: 'wrap' }}
                  >
                    {playList?.map((item) => (
                      <SearchItem
                        key={item.uuid}
                        id={item.uuid}
                        isWork={false}
                        area={area as string}
                        name={item.name}
                        location={item.addr}
                        photo={item.photo}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </ContentContainer>
        </>
      )}
    </>
  )
}

const TabBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  line-height: 20px;
  padding-top: 80px;
`
const TabBarList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
`
const TabBarItem = styled.li<TabBarProps>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: flex-end;
  margin-left: 8px;
  font-size: var(--font-H5);
  font-family: var(--font-primary);
  color: ${(props) =>
    props.click
      ? `${COLORS.mainColor.primary}`
      : `${COLORS.grayscale.gray400}`};
`

const ContentContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
`
