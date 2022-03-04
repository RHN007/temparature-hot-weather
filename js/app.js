const API_key = `3e011bd9a0a03b4eda24a04a975438b3`;

const serachTemperature = () => {
    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
    // console.log(url);

    fetch(url)
        .then((res) => res.json())
        .then((data) => displayTemparature(data));
};

const displayTemparature = (temparature) => {
    console.log(temparature);
};