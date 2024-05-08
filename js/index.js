//99deb9c908b54f9f93d155505242304
let searchInput = document.getElementById('searchInput');


let days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
let day= new Date().getDay();
let month= new Date().getMonth();
let dayNumber= new Date().getDate();
console.log(months[month]);


// function to get city
searchInput.addEventListener("keyup",function(){
    getData(searchInput.value);
})


// function to get data
async function getData(city) {
    let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=99deb9c908b54f9f93d155505242304&q=${city}&days=3`);
    let final = await res.json();
   displayCurrent(final.current,final.location.name);
    displayNextDay(final.forecast.forecastday[1]);
    displayAfterNextDay(final.forecast.forecastday[2])
   console.log(final);
}
getData("cairo");


// function to display current data
function displayCurrent(current,city){
    let cartoona=``;

    cartoona+=`
    <div
    class="header rounded-top-3 drakColor d-flex justify-content-between p-2"
  >
    <span id="currentDay">${days[day]}</span>
    <span id="currentDate">${dayNumber}${months[month]}</span>
  </div>
  <div class="body rounded-bottom-3 lightColor px-2 py-4">
    <p id="currentCity">${city}</p>
    <div class="d-flex justify-content-between align-items-center">
      <h3 id="currentTemp" class="text-white">${current.temp_c}<sup>o</sup>C</h3>
      <img id="special" src=${current.condition.icon}  />
    </div>
    <span id="currentStatues" class="text-info">${current.condition.text}</span>
    <div class="d-flex align-items-center mt-3">
      <div class="d-flex align-items-center me-3">
        <img  src="./images/icon-umberella@2x.png" class="me-2" />
        <span id="humidity">${current.humidity}%</span>
      </div>
      <div class="d-flex align-items-center me-3">
        <img src="./images/icon-wind@2x.png" class="me-2" />
        <span id="wind">${current.wind_kph}km/h</span>
      </div>
      <div class="d-flex align-items-center me-3">
        <img src="./images/icon-compass@2x.png" class="me-2" />
        <span id="windDirection">${current.wind_dir}</span>
      </div>
    </div>
  </div>
    
    `
    document.getElementById("currentDay").innerHTML=cartoona;

}

// function to display next day
function displayNextDay(nextDayData){
    let nextDay=new Date(nextDayData.date).getDay();

    let cartona=``;
    cartona+=`
    <div class="header rounded-top-3 lightColor py-2">
    <span id="nextDay">${days[nextDay]}</span>
  </div>
  <div class="body rounded-bottom-3 drakColor py-5 px-2">
    <img id="special" class="mb-4 m-auto" src=${nextDayData.day.condition.icon}  />
    <h4 id="nextDayMax" class="text-white fw-bold fs-2">${nextDayData.day.maxtemp_c}c</h4>
    <p id="nextDayMin">${nextDayData.day.mintemp_c}c</p>
    <span id="nextDayStatues" class="text-info">${nextDayData.day.condition.text}</span>
  </div>
    `
    document.getElementById("nextDay").innerHTML=cartona;

}


// function to display after next day
function displayAfterNextDay(afterNextDayData){
  
    let afterNextDay=new Date(afterNextDayData.date).getDay();
 
    let cartoona=``;
    cartoona+=`
    <div class="header rounded-top-3 drakColor py-2">
    <span id="afterDay">${days[afterNextDay]}</span>
  </div>
  <div class="body rounded-bottom-3 lightColor py-5 px-2">
    <img id="special" class="mb-4 m-auto" src=${afterNextDayData.day.condition.icon}  />
    <h4 id="afterDayMax" class="text-white fw-bold fs-2">${afterNextDayData.day.maxtemp_c}c</h4>
    <p id="afterDayMin">${afterNextDayData.day.mintemp_c}c</p>
    <span id="afterDaystatues" class="text-info">${afterNextDayData.day.condition.text}</span>
  </div>
    `
    document.getElementById("afterNextDay").innerHTML=cartoona;

}


