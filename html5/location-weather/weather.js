"use strict";
{
    const resultEl = document.getElementById('result');
    const weatherElement = document.getElementById('weather');
    window.myPosition = function () {
        if (!navigator.geolocation) {
            resultEl.textContent = '이 브라우저에서는 위치 정보를 지원하지 않습니다!';
            return;
        }
        navigator.geolocation.getCurrentPosition(currentPosition, errorCallback);
    };
    const getWeather = (lat, lng) => {
        var apiKey = '';
        var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;
        fetch(apiUrl)
            .then(function (res) {
            console.log(res);
            return res.json();
        })
            .then(function (data) {
            console.log(data);
            var weatherdes = data.weather[0].description;
            var temperature = data.main.temp;
            var cityName = data.name;
            var weatherInfo = `도시: ${cityName}<br>
          날씨: ${weatherdes}<br>
          온도: ${temperature}<br>
          `;
            weatherElement.innerHTML = weatherInfo;
        })
            .catch(function (error) {
            console.error('날씨 정보를 가져오는 중 오류 발생: ', error);
        });
    };
    // 현재 위치 값 구하기
    const currentPosition = (position) => {
        const { latitude, longitude } = position.coords;
        resultEl.textContent = `📍 현재 위치: 위도 ${latitude}, 경도 ${longitude}`;
        getWeather(latitude, longitude);
        weatherElement.innerHTML = '';
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
}
