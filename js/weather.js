const WEATHER_API_KEY = "c6cba06faf2bed8923c77db9bab6082f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const maxMin = document.querySelector("#weather span:nth-child(3)");

      city.innerText = `당신이 계신 곳은 ${data.name} 입니다.`;
      weather.innerText = `${data.name}의 날씨는 ${data.weather[0].main}`;
      maxMin.innerText = `현재 ${data.main.temp}🌡 / 최고 ${data.main.temp_max}🌡 / 최저 ${data.main.temp_min}🌡`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
