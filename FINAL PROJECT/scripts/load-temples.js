window.addEventListener('load', ()=>{
    const requestURL = '/FINAL PROJECT/temple_list.json'
    fetch(requestURL)
    .then ((response)=> {
        return response.json();
    })
    .then((jsonObject) => {
        buildAlbaCard(jsonObject);
        buildOhioCard(jsonObject);
        buildPalmyraCard(jsonObject);
        buildNauvooCard(jsonObject);
    });
});
function buildAlbaCard(temple) {
    text=''
    var i;
    for (i = 0; i < temple[0].closure.length; i++) {
        text += temple[0].closure[i] + "<br>";
}
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = 
        `<h2>${temple[0].name}</h2>
        <img src = "${temple[0].imageurl}" alt = "${temple[0].name}">
        <div class="weather">
        <h3>Weather Right Now</h3>
        <p>Currently: <span id = 'description1'></span></p>
        <p>Temp: <span id="current-temp1"></span>&deg; F</p>
        <p>Windspeed: <span id ='wind-speed1'></span> MPH</p>
        <p>Humidity: <span id='humidity1'></span>%</p>
        <p><a href="https://weather.com/weather/tenday/l/cdad20b8f7657de1012528aeda289407445c7be167e14dd56a66b0cd3716ff03">Ten Day Forecast </a></p>
        </div>
        <div class="info">
        <p><b>Address:</b> ${temple[0].address1} <br> ${temple[0].city}, ${temple[0].state} ${temple[0].zip} </p>
        <p><b>Schedule: </b>${temple[0].schedule}</p>
        <p class="closure"><b>Closure Dates for 2021:</b> <br>${text}</p>
        <p>Like a blossom in the desert, 
        the beautiful Albuquerque New Mexico 
        Temple adorns the arid landscape of northeastern 
        Albuquerque in the residential neighborhood of North 
        Albuquerque Acres. The temple grounds are a lush oasis 
        of green grass and vibrantly colored flora including many 
        native plant species. At the main entrance, a magnificent 
        spraying water feature delights patrons as they enter and 
        leave the sacred structure. The exterior is prominently 
        ornamented with heavenly symbols including moons, stars, and suns.</p>
        </div>
        `;
    document.querySelector("#temples").appendChild(card);
    get_alba_temp()
};
function get_alba_temp () {
    const requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=87122&appid=479fe9277fff4b68adc83def2d8c2a98&units=imperial';
    fetch(requestURL)
        .then( response => {return response.json(); } )
        .then( jsonObject => {  
            table = jsonObject;
            document.getElementById("description1").innerHTML = (table.weather[0].description).toUpperCase();
            document.getElementById("current-temp1").innerHTML = Math.round(table.main.temp);
            document.getElementById("wind-speed1").innerHTML = Math.round(table.wind.speed);
            document.getElementById("humidity1").innerHTML = table.main.humidity;
    })
}
function buildOhioCard(temple) {
    text=''
    var i;
    for (i = 0; i < temple[1].closure.length; i++) {
        text += temple[1].closure[i] + "<br>";
}
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = 
        `<h2>${temple[1].name}</h2>
        <img src = "${temple[1].imageurl}" alt = "${temple[1].name}">
        <div class="weather">
        <h3>Weather Right Now</h3>
        <p>Currently: <span id = 'description2'></span></p>
        <p>Temp: <span id="current-temp2"></span>&deg; F</p>
        <p>Windspeed: <span id ='wind-speed2'></span> MPH</p>
        <p>Humidity: <span id='humidity2'></span>%</p>
        <p><a href="https://weather.com/weather/tenday/l/f0e08ec061e8a5ec6017b6338adffb031304e10ed396670da5c5fbe9838cd9f1">Ten Day Forecast </a></p>
        </div>
        <div class="info">
        <p><b>Address:</b> ${temple[1].address1} <br> ${temple[1].city}, ${temple[1].state} ${temple[1].zip} </p>
        <p><b>Schedule: </b>${temple[1].schedule}</p>
        <p class="closure"><b>Closure Dates for 2021: </b><br>${text}   
        <br><br><br><br><br><br><br><br>
        </p>
        <p>The Columbus Ohio Temple is located 150 miles 
        south of Kirtland, Ohio, where the restored Church 
        of Jesus Christ dedicated its first temple in 1836. 
        The temple stands in a wooded area of western Columbus 
        adjacent to a meetinghouse in the Columbus Ohio Stake. 
        The beautiful white Vermont marble facing on the exterior 
        was quarried near Sharon, Vermont, the birthplace of the 
        Prophet Joseph Smith.
        </p> 
        </div>
       `;
    document.querySelector("#temples").appendChild(card);
    get_ohio_temp()
};
function get_ohio_temp () {
    const requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=43228&appid=479fe9277fff4b68adc83def2d8c2a98&units=imperial';
    fetch(requestURL)
        .then( response => {return response.json(); } )
        .then( jsonObject => { 
            table = jsonObject;
            document.getElementById("description2").innerHTML = (table.weather[0].description).toUpperCase();
            document.getElementById("current-temp2").innerHTML = Math.round(table.main.temp);
            document.getElementById("wind-speed2").innerHTML = Math.round(table.wind.speed);
            document.getElementById("humidity2").innerHTML = table.main.humidity;
    })
}
function buildPalmyraCard(temple) {
    text=''
    var i;
    for (i = 0; i < temple[2].closure.length; i++) {
        text += temple[2].closure[i] + "<br>";
}
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = 
        `<h2>${temple[2].name}</h2>
        <img src = "${temple[2].imageurl}" alt = "${temple[2].name}">
        <div class="weather">
        <h3>Weather Right Now</h3>
        <p>Currently: <span id = 'description3'></span></p>
        <p>Temp: <span id="current-temp3"></span>&deg; F</p>
        <p>Windspeed: <span id ='wind-speed3'></span> MPH</p>
        <p>Humidity: <span id='humidity3'></span>%</p>
        <p><a href="https://weather.com/weather/tenday/l/146b4af0cb36569c2b1b976643de25dc0456cd930bebd8a0548d6699115f2d6d">Ten Day Forecast</a></p>
        </div>
        <div class="info"> 
        <p><b>Address:</b> ${temple[2].address1} <br> ${temple[2].city}, ${temple[2].state} ${temple[2].zip} </p>
        <p><b>Schedule: </b>${temple[2].schedule}</p>
        <p class="closure"><b>Closure Dates for 2021: </b><br>${text}</p>
        <p>Situated on an elevated ridge just beyond 
        the Sacred Grove where God the Father and Jesus 
        Christ appeared to Joseph Smith in the spring of 1820, 
        the Palmyra New York Temple—a House of the Lord—stands as 
        a testimony to that singular event. Rich in Church history, 
        the Palmyra landscape is dotted with historic sites including 
        the Hill Cumorah Visitors' Center where Joseph Smith retrieved 
        the ancient gold plates, which were translated into the Book of 
        Mormon: Another Testament of Jesus Christ.</p>
        </div>
        `;
    document.querySelector("#temples").appendChild(card);
    get_palmyra_temp()
};
function get_palmyra_temp () {
    const requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=14522&appid=479fe9277fff4b68adc83def2d8c2a98&units=imperial';
    fetch(requestURL)
        .then( response => {return response.json(); } )
        .then( jsonObject => { 
            table = jsonObject;
            document.getElementById("description3").innerHTML = (table.weather[0].description).toUpperCase();
            document.getElementById("current-temp3").innerHTML = Math.round(table.main.temp);
            document.getElementById("wind-speed3").innerHTML = Math.round(table.wind.speed);
            document.getElementById("humidity3").innerHTML = table.main.humidity;
    })
}
function buildNauvooCard(temple) {
    text=''
    var i;
    for (i = 0; i < temple[3].closure.length; i++) {
        text += temple[3].closure[i] + "<br>";
}
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = 
        `<h2>${temple[3].name}</h2>
        <img src = "${temple[3].imageurl}" alt = "${temple[3].name}">
        <div class="weather">
        <h3>Weather Right Now</h3>
        <p>Currently: <span id = 'description4'></span></p>
        <p>Temp: <span id="current-temp4"></span>&deg; F</p>
        <p>Windspeed: <span id ='wind-speed4'></span> MPH</p>
        <p>Humidity: <span id='humidity4'></span>%</p>
        <p><a href="https://weather.com/weather/tenday/l/fc141a0151b8278170c53faefa0faeae6a9ac20bdfd7298f09406cac01b3508a">Ten Day Forecast </a></p>
        </div>
        <div class="info"> 
        <p><b>Address:</b> ${temple[3].address1} <br> ${temple[3].city}, ${temple[3].state} ${temple[2].zip} </p>
        <p><b>Schedule: </b>${temple[3].schedule}</p>
        <p><b>Closure Dates for 2021:</b><br>${text}</p>
        <p>The Nauvoo Illinois Temple stands on a high bluff overlooking 
        a bend in the Mississippi River. The majestic building is a faithful 
        reproduction of the original Nauvoo Temple built by settlers of the 
        Church in the 1840s and destroyed by arson fire in 1848 and tornado-
        force winds in 1850. Featured on the grounds west of the temple is a 
        handsome statue depicting Church founder Joseph Smith and brother 
        Hyrum Smith on horseback; both were martyred in Carthage Jail during 
        construction of the original temple. Nauvoo is rich in Church history 
        and the destination of thousands of tourists each year. The temple 
        operates an accelerated summer schedule to accommodate demand. Summer 
        is also the season of the popular Nauvoo Pageant: A Tribute to Joseph Smith.</p>
        </div>
        `;
    document.querySelector("#temples").appendChild(card);
    get_nauvoo_temp()
};
function get_nauvoo_temp () {
    const requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=62354&appid=479fe9277fff4b68adc83def2d8c2a98&units=imperial';
    fetch(requestURL)
        .then( response => {return response.json(); } )
        .then( jsonObject => { 
            table = jsonObject;
            document.getElementById("description4").innerHTML = (table.weather[0].description).toUpperCase();
            document.getElementById("current-temp4").innerHTML = Math.round(table.main.temp);
            document.getElementById("wind-speed4").innerHTML = Math.round(table.wind.speed);
            document.getElementById("humidity4").innerHTML = table.main.humidity;
    })
}