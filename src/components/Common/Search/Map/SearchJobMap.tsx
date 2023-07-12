import { useEffect } from 'react'
import * as styles from './SearchMap.style'
import { useState } from 'react'

interface SearchJobMapProps {
  addr: string
}
declare global {
  interface Window {
    kakao: any
  }
}
export default function SearchJobMap({ addr }: SearchJobMapProps) {
  useEffect(() => {
    // DOM을 이용하여 script 태그를 만들어주자.
    const mapScript = document.createElement('script')
    // script.async = true 라면,
    // 해당 스크립트가 다른 페이지와는 비동기적으로 동작함을 의미한다.
    mapScript.async = true
    // script.src에 map을 불러오는 api를 넣어주자.
    // 여기에서 우리가 기존에 발급 받았던 apiKey를 넣어주면 된다.
    mapScript.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=4fea8d71ddd17d417dc24316314e373d&libraries=services&autoload=false'

    //이제 우리가 만든 script를 document에 붙여주자.
    document.head.appendChild(mapScript)
    let lat = 0
    let lng = 0
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map')
        const geocoder = new window.kakao.maps.services.Geocoder()

        geocoder.addressSearch(addr, function (result: any, status: any) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x,
            )
            lat = coords.Ma
            lng = coords.La

            const mapOption = {
              center: new window.kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
              level: 3, // 지도의 확대 레벨
            }
            const map = new window.kakao.maps.Map(mapContainer, mapOption)
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            })
            marker.setMap(map)
          }
        })
      })
    }

    // sciprt가 완전히 load 된 이후, 지도를 띄우는 코드를 실행시킨다.
    mapScript.addEventListener('load', onLoadKakaoMap)
  }, [])
  return (
    <div>
      <div style={{ display: 'flex', height: '100%' }}>
        <styles.AccentTitle>위치</styles.AccentTitle>
        <styles.Title>를 확인해보세요!</styles.Title>
      </div>
      <div className="pt-60"></div>
      <div
        id="map"
        style={{ height: '100%', width: '100%', minHeight: '500px' }}
      ></div>
    </div>
  )
}
