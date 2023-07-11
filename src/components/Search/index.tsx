import BreadCrumb from '../Common/BreadCrumb'
import styled from '@emotion/styled'
import AreaSearchButton, {
  AreaButtonProps,
} from '../Common/Button/AreaSearchButton/AreaSearchButton'
import { AREA } from '../../styles/areaImage'
import {
  AreaButton,
  AreaText,
} from '../Common/Button/AreaSearchButton/AreaSearchButton.style'
import { useRouter } from 'next/router'

const areaData: AreaButtonProps[] = [
  {
    id: 0,
    area: AREA.kyeongki,
    text: '경기',
  },
  {
    id: 1,
    area: AREA.kangwon,
    text: '강원',
  },
  {
    id: 2,
    area: AREA.choongchung,
    text: '충청',
  },
  {
    id: 3,
    area: AREA.jeonbook,
    text: '전북',
  },
  { id: 4, area: AREA.jeonnam, text: '전남' },
  {
    id: 5,
    area: AREA.kyeongbook,
    text: '경북',
  },
  {
    id: 6,
    area: AREA.kyeongnam,
    text: '경남',
  },
  {
    id: 7,
    area: AREA.jeju,
    text: '제주',
  },
]

export default function Search() {
  const router = useRouter()
  const onClick = (areaTxt: string, areaId: number) => {
    console.log(areaTxt)
    router.push({
      pathname: `/search/${areaTxt}`,
      query: {
        areaId: areaId.toString(),
      },
    })
  }
  return (
    <div>
      <BreadCrumb
        title={'로컬 홀리데이 찾기'}
        subTitle={
          '지역의 특색에 맞는 로컬 일거리와 로컬 놀거리들을 찾아볼 수 있어요.'
        }
        colorIdx={1}
        breadImgIdx={1}
        isArea={false}
      />
      <Container>
        <div className="pt-30"></div>
        <Title>지역을 선택해주세요</Title>
        <div className="pt-50"></div>
        <div className="row col-lng-12">
          <div
            className="col-lng-12"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {areaData.map((item) => (
              <>
                <Button
                  key={item.id}
                  onClick={() =>
                    onClick(item.text as string, item.id as number)
                  }
                >
                  <AreaSearchButton key={item.id} area={item.area} />
                  <div className="pt-10"></div>
                  <AreaText>{item.text}</AreaText>
                </Button>
              </>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
const Title = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-H3);
`
const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`

const Button = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
