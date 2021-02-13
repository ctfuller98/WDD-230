window.addEventListener('load', () =>{
    windChill()
});
function windChill() {
    var temp = document.getElementById('temp').innerHTML;
    var wind = document.getElementById('wind').innerHTML; 
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
