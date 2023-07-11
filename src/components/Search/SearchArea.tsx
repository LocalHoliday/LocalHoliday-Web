import { useRouter } from 'next/router'
import BreadCrumb from '../Common/BreadCrumb'
import styled from '@emotion/styled'
import { COLORS } from '@/styles/colors'
import { useState } from 'react'

interface TabBarProps {
  click: boolean
}

export default function SearchArea() {
  const { query } = useRouter()
  const area = query.id
  const areaId = query.areaId
  const [playClick, setPlayClick] = useState<boolean>(false)
  const [workClick, setWorkClick] = useState<boolean>(true)

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
      <BreadCrumb
        colorIdx={3}
        isArea={true}
        title={`${area}에서 로컬홀리데이를 즐겨보세요`}
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
