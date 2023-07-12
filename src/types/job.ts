interface JobDetail {
  job: IJobDetail
}

interface IJobDetail {
  name: string
  photo: string
  host_phone: string
  uuid: string
  addr: string
  startTime: string
  endTime: string
  pay: number
  reviews: []
}

interface IJobReview {
  id: string
  bill_id: string
  created: string
  job_id: string
  end_date: string
  field: string
  host_name: string
  host_phone: string
  location: string
}

export type GetJobDetailRes = JobDetail
