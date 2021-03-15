window.addEventListener('load', () =>{
    get_api()
   windChill()
});
function get_api(){
    /*const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=d86479566d517a3825a9bd3f4c9caef4"
    fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
        console.log(jsObject);
        //Current Temp//
        document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;
        //Icon//
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';
        const desc = jsObject.list[0].weather[0].description
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
      });*/
      const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=70a3382c326cf2cbb5e5cc5922554860&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('humid').textContent = jsObject.main.humidity
    document.getElementById('status').textContent = jsObject.weather[0].main; 
    document.getElementById('windspeed').textContent = Math.round(jsObject.wind.speed)  
  });
  const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=70a3382c326cf2cbb5e5cc5922554860&units=imperial'
  fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
/*-----------------------MONDAY -------------------------------------------*/
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[7].weather[0].icon + '.png';
    const desc = jsObject.list[7].weather[0].description
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
    document.getElementById('high_mon').innerHTML = Math.round(jsObject.list[7].main.temp_max)
 
/*-------------------------TUESDAY--------------------------------*/
const imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject.list[15].weather[0].icon + '.png';
const desc1 = jsObject.list[15].weather[0].description
document.getElementById('icon').setAttribute('src', imagesrc1);
document.getElementById('icon').setAttribute('alt', desc1);
document.getElementById('high_tues').innerHTML = Math.round(jsObject.list[15].main.temp_max)
document.getElementById('low_tues').innerHTML = Math.round(jsObject.list[15].main.feels_like)
/*--------------------------WEDNESDAY--------------------------------------------*/
const imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject.list[23].weather[0].icon + '.png';
const desc2 = jsObject.list[23].weather[0].description
document.getElementById('icon').setAttribute('src', imagesrc2);
document.getElementById('icon').setAttribute('alt', desc2);
document.getElementById('high_wed').innerHTML = Math.round(jsObject.list[23].main.temp_max)
document.getElementById('low_wed').innerHTML = Math.round(jsObject.list[23].main.feels_like)
/*------------------------------THURSDAY-------------------------------------------------*/
const imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject.list[31].weather[0].icon + '.png';
const desc3 = jsObject.list[31].weather[0].description
document.getElementById('icon').setAttribute('src', imagesrc3);
document.getElementById('icon').setAttribute('alt', desc3);
document.getElementById('high_thu').innerHTML = Math.round(jsObject.list[31].main.temp_max)
document.getElementById('low_thu').innerHTML = Math.round(jsObject.list[31].main.feels_like)
/*---------------------------------FRIDAY-------------------------------------------------------*/
const imagesrc4 = 'https://openweathermap.org/img/w/' + jsObject.list[39].weather[0].icon + '.png';
const desc4 = jsObject.list[39].weather[0].description
document.getElementById('icon').setAttribute('src', imagesrc4);
document.getElementById('icon').setAttribute('alt', desc4);
document.getElementById('high_fri').innerHTML = Math.round(jsObject.list[39].main.temp_max)
document.getElementById('low_fri').innerHTML = Math.round(jsObject.list[39].main.feels_like)
    newArray = jsObject.list;
    for(let i = 0; i < newArray.length; i++){
        let time = newArray[i].dt_txt;
        let desired_time = "18:00:00";
        if (time.includes(desired_time)) {
           /* let days = ["Sunday", "Monday","Tuesday","Thursday","Friday","Saturday"]*/
            let forecast_temp = Math.round(jsObject.list[i].main.temp);
            a = newArray.indexOf(i)
            console.log(forecast_temp)
            console.log(a)
        } 
        else {
        }
    }
  });
}
  function windChill() {
    var temp = document.getElementById('current-temp').innerHTML;
    var wind = document.getElementById('windspeed').innerHTML; 
    var matches = temp.match(/(\d+)/);
    var windy = wind.match(/(\d+)/); 
    var t = matches[0]; 
    var s = windy[0];
    var str1 = "Wind Chill: "
    var str2 = "&#176; F"
    if (t>50 || s<3){
        document.getElementById('windchill').innerHTML = str1.concat("N/A")
    }
    else{   
        var wc = Math.round(35.74 + (0.6215*t)-35.75*(s**0.16)+(0.4275*(t*(s**0.16))))
        document.getElementById('windchill').innerHTML = str1.concat(wc).concat(str2)
    }
}