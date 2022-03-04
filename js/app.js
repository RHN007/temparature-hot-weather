const API_key = `3e011bd9a0a03b4eda24a04a975438b3`;

const serachTemperature = () => {
    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&&units=metric`;
    // console.log(url);

    fetch(url)
        .then((res) => res.json())
        .then((data) => displayTemparature(data));
};

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
};

const displayTemparature = (temparature) => {
    setInnerText("city", temparature.name);
    setInnerText("temperature", temparature.main.temp);
    setInnerText("condition", temparature.weather[0].main);

    // set Weather Icon

    const url = `https://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("weather-icon");
    imgIcon.setAttribute("src", url);

    console.log(temparature);
};