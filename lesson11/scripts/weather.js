const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=479fe9277fff4b68adc83def2d8c2a98';
const requestURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=479fe9277fff4b68adc83def2d8c2a98';

fetch(requestURL)
    .then( response => { return response.json(); } )
    .then(  jsonObject => { 
        console.table(jsonObject); 
        table = jsonObject;

        document.getElementById("description").innerHTML = (table.weather[0].description).toUpperCase();
        document.getElementById("current-temp").innerHTML = Math.round(table.main.temp);
        //document.getElementById("temp-low").innerHTML = table.main.temp_min;
        document.getElementById("wind-speed").innerHTML = Math.round(table.wind.speed);
        document.getElementById("humidity").innerHTML = table.main.humidity;
        windChill();
})

fetch(requestURL2)
    .then( response => { return response.json(); } )
    .then(  jsonObject => { 
        console.table(jsonObject); 
        const fc = jsonObject['list'];

        count = 1;

        for (let i = 0; i < fc.length; i++ ) {
            var str = fc[i].dt_txt;
            str1 = str.substr(str.indexOf(' ')+1);
            date = str.substr(0,str.indexOf(' '))
            date = new Date(date).toLocaleString('en-us', {weekday:'short'});

            if (str1 == "18:00:00") {
                document.getElementById("day-" + count).innerHTML = date;
                document.getElementById("day-" + count + "-high").innerHTML = Math.round(fc[i].main.temp);
                document.getElementById("day-" + count + "-low").innerHTML = Math.round(fc[i].main.feels_like);

                var iconcode = fc[i].weather[0].icon;
                var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
                document.getElementById("day-" + count + "-img").setAttribute('src', iconurl);
                document.getElementById("day-" + count + "-img").setAttribute('alt', fc[i].weather[0].description);

                count ++;
            }
        }
})
function windChill() {
    fetch(requestURL)
    .then( response => { return response.json(); } )
    .then(  jsonObject => { 
        table = jsonObject;
    var t = table.main.temp;
    var w = table.wind.speed; 
    var str1 = "Wind Chill: "
    var str2 = "&#176; F"
    if (t>50 || w<3){
        document.getElementById('wind-chill').innerHTML = str1.concat("N/A")
    }
    else{   
        var wc = Math.round(35.74 + (0.6215*t)-35.75*(w**0.16)+(0.4275*(t*(w**0.16))))
        document.getElementById('wind-chill').innerHTML = str1.concat(wc).concat(str2)
    }
})
}