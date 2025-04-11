"use strict";
{
    let watcherId = 0;
    const resultEl = document.getElementById('result');
    const mapElement = document.getElementById('map');
    // 현재 위치 값 구하기
    const currentPosition = (position) => {
        const { latitude, longitude } = position.coords;
        resultEl.textContent = `📍 현재 위치: 위도 ${latitude}, 경도 ${longitude}`;
        const latlng = new google.maps.LatLng(latitude, longitude);
        const options = {
            zoom: 15,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        const map = new google.maps.Map(mapElement, options);
        const marker = new google.maps.Marker({
            map: map,
            icon: 'marker.jpeg',
            title: 'my position',
            position: latlng,
        });
    };
    // 에러 처리
    const errorCallback = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                resultEl.textContent = `❌ 현재 위치 정보에 대한 권한이 없습니다.: ${error.message}`;
                break;
            case error.POSITION_UNAVAILABLE:
                resultEl.textContent = `❌ 현재 위치 정보를 구할 수 없습니다.: ${error.message}`;
                break;
            case error.TIMEOUT:
                resultEl.textContent = `❌ 시간 제한을 초과했습니다.: ${error.message}`;
                break;
        }
    };
    // 위치
    function MyPosition() {
        if (!resultEl) {
            console.error('결과를 출력할 요소가 없습니다.');
            return;
        }
        if (!navigator.geolocation) {
            resultEl.textContent = '이 브라우저에서는 위치 정보를 지원하지 않습니다!';
            return;
        }
        navigator.geolocation.getCurrentPosition(currentPosition, errorCallback);
    }
    // 위치 추적
    function StartPos() {
        if (navigator.geolocation) {
            const options = { timeout: 1000 };
            watcherId = navigator.geolocation.watchPosition(currentPosition, errorCallback, options);
        }
    }
}
