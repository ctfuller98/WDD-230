window.addEventListener('load', () =>{

    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('.navigation');
    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')},false);
    window.onresize = ()=>{if(window.innerWidth>760) mainnav.classList.remove('responsive');};


    let current_datetime = new Date();
    let month = current_datetime.getMonth()
    let dow = current_datetime.getDay();
    if (dow == 0) {
        dow = "Sunday"
    }
    else if (dow == 1){
        dow = 'Monday'
    }
    else if (dow == 2) {
        dow = 'Tuesday'
    }
    else if (dow == 3) {
        dow = 'Wednesday'
    }
    else if (dow == 4) {
        dow = 'Thursday'
    }    
    else if (dow == 5) {
        dow = 'Friday'
    }
    else if (dow == 6) {
        dow = 'Saturday'
    }  
    if (month == 0) {
        month = "January"
    }
    else if (month == 1){
        month = 'February'
    }
    else if (month == 2) {
        month = 'March'
    }
    else if (month == 3) {
        month = 'April'
    }
    else if (month == 4) {
        month = 'May'
    }    
    else if (month == 5) {
        month = 'June'
    }
    else if (month == 6) {
        month = 'July'
    }  
    else if (month == 7) {
        month = 'August'
    }
    else if (month == 8) {
        month = 'September'
    }  
    else if (month == 9) {
        month = 'October'
    }
    else if (month == 10) {
        month = 'November'
    }   else if (month == 11) {
        month = 'December'
    }


    let formatted_date = dow + ", " + current_datetime.getDate() + " " +  month  +" " + current_datetime.getFullYear()
    document.getElementById('datetime').innerHTML = formatted_date
    
});
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
      .then((response) => response.json())
      .then((jsonObject) => {
    const towns = jsonObject['towns'];

/*---------------Fish Haven--------------------------------------------*/
    let card = document.createElement('section');
    let h2 = document.createElement('h2'); 
    h2.textContent = towns[1].name
    card.appendChild(h2);
    document.querySelector('div.card1').appendChild(card);

    let founded = document.createElement('p');
    founded.textContent = "Year Founded: " + towns[1].yearFounded;
    card.appendChild(founded);

    let population = document.createElement('p');
    population.textContent = "Current Population: " + towns[1].currentPopulation;
    card.appendChild(population);
    
    let rain = document.createElement('p');
    rain.textContent = "Average Yearly Rainfall: " + towns[1].averageRainfall + " inches";
    card.appendChild(rain);

    let cardimg = document.createElement('section');
    let image = document.createElement('img');
    cardimg.classList.add('one');
    image.setAttribute('src', 'images/' + towns[1].photo);
    cardimg.appendChild(image)
    document.querySelector('div.card1').appendChild(cardimg);


/*-------------------PRESTON----------------------------------*/
    let card2 = document.createElement('section');
    card2.classList.add('cardtwo');
    let preston = document.createElement('h2'); 
    preston.textContent = towns[5].name
    card2.appendChild(preston);
    document.querySelector('div.card2').appendChild(card2);

    let founded2 = document.createElement('p');
    founded2.textContent = "Year Founded: " + towns[5].yearFounded;
    card2.appendChild(founded2);

    let population2 = document.createElement('p');
    population2.textContent = "Current Population: " + towns[5].currentPopulation;
    card2.appendChild(population2);
    
    let rain2 = document.createElement('p');
    rain2.textContent = "Average Yearly Rainfall: " + towns[5].averageRainfall + " inches";
    card2.appendChild(rain2);

    let cardimg2 = document.createElement('section');
    let image2 = document.createElement('img');
    cardimg2.classList.add('two');
    image2.setAttribute('src', 'images/' + towns[5].photo);
    cardimg2.appendChild(image2)
    document.querySelector('div.card2').appendChild(cardimg2);

/*----------------------SODA SPRINGS ---------------------------------*/
let card3 = document.createElement('section');
let soda = document.createElement('h2'); 
soda.textContent = towns[6].name
card3.appendChild(soda);
document.querySelector('div.card3').appendChild(card3);

let founded3 = document.createElement('p');
founded3.textContent = "Year Founded: " + towns[6].yearFounded;
card3.appendChild(founded3);

let population3 = document.createElement('p');
population3.textContent = "Current Population: " + towns[6].currentPopulation;
card3.appendChild(population3);

let rain3 = document.createElement('p');
rain3.textContent = "Average Yearly Rainfall: " + towns[6].averageRainfall + " inches";
card3.appendChild(rain3);


let cardimg3 = document.createElement('section');
let image3 = document.createElement('img');
cardimg3.classList.add('two');
image3.setAttribute('src', 'images/' + towns[6].photo);
cardimg3.appendChild(image3)
document.querySelector('div.card3').appendChild(cardimg3);
  });