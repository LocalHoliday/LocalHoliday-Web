import React from 'react'
import { SyncLoader } from 'react-spinners'

export default function Spinner() {
  return (
    <>
      <div>
        <h3>잠시만 기다려주세요</h3>
        <SyncLoader />
      </div>
    </>
  )
}
