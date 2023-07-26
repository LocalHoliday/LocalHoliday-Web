import BreadCrumb from '../Common/BreadCrumb'

export default function MyPage() {
  return (
    <>
      <BreadCrumb
        title={'나의 로컬 홀리데이'}
        subTitle={
          '내가 스크랩한 정보들과 로컬홀리데이 기록을 모아볼 수 있어요.'
        }
        colorIdx={2}
        breadImgIdx={2}
        isArea={false}
      />
    </>
  )
}
