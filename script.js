function getWeatherDetails() {

    let location = w_location.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6fa99e1f96f024f79970c5a3532b2ac6`)
    .then(res => res.json())
    .then(data => populateValue(data));
    //    .catch(alert("Error while fetching data from this resource"))
}
// 36
function populateValue(data) {
    let location = data.name
    let temperature = Math.round(data.main.temp-273.15);
    let feels_like  = Math.round(data.main.feels_like-273.15);
    let clouds = data.clouds.all;
    let humidity  = data.main.humidity;
    let pressure = data.main.pressure;
    html_data = ` <div class="desc" id="place">${location}</div>
    <div class="desc" id="temp">${temperature}°</div>
    <div class="desc">Feels Like ${feels_like}°</div>
    <div class="desc">Clouds ${clouds}%</div>
    <div class="desc">Humidity: ${humidity}%</div>
    <div class="desc">Pressure: ${pressure}hPa</div>`

    document.querySelector("#ctn-details").innerHTML = html_data;
}
