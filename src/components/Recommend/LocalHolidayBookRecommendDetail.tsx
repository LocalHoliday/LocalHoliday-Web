import { useRouter } from 'next/router'

export default function LocalHolidayBookRecommendDetail() {
  const { query } = useRouter()
  const recommendId = query.courseId
  return (
    <>
      <h1>hi</h1>
    </>
  )
}
