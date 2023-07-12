import { ITourRecomData } from '@/types/recommend'
import Image from 'next/image'
import RecommendTitle from '../Title/RecommendTitle'
import RecommendBody from '../Body'
import { COLORS } from '@/styles/colors'
import { useRouter } from 'next/router'
import Hashtag from '../../Hashtag'
import styled from '@emotion/styled'

interface RecommendBookProps {
  id: string
  img: string
  title: string
  billId: string
  userId: string
  content: string
}

export default function RecommendBook({
  id,
  img,
  title,
  billId,
  userId,
  content,
}: RecommendBookProps) {
  const router = useRouter()
  const onClick = () => {
    router.push(
      {
        pathname: `/recommend/book/${billId}`,
        query: {
          billId: billId,
        },
      },
      `/recommend/book/${billId}`,
    )
  }

  return (
    <div className="col-lg-4">
      <div style={{ cursor: 'pointer' }} onClick={onClick}>
        <Image
          src={img}
          width={400}
          height={300}
          alt="로컬홀리데이북 조회"
          priority
        />
        <div className="pt-20" />
        <RecommendTitle title={title} />
        <div className="pt-10" />
        <Body>{content}</Body>
      </div>
    </div>
  )
}

const Body = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-B1);
  width: 400px;
  color: ${COLORS.grayscale.gray500};
`
