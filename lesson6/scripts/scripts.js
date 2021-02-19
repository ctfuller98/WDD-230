window.addEventListener('load', () =>{
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('.navigation');
    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')},false);
    window.onresize = ()=>{if(window.innerWidth>760) mainnav.classList.remove('responsive')};
function toggleMenu() {
    var day = new Date();
    document.getElementById("overlay").style.display = "none";
}
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  function promo() {
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
        var overlay = document.getElementById("overlay");
        overlay.classList.toggle("hide");
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
    } 
    else if (month == 11) {
        month = 'December'
    }

    let formatted_date = dow + ", " + current_datetime.getDate() + " " +  month  +" " + current_datetime.getFullYear()
    document.getElementById('datetime').innerHTML = formatted_date
    
};
WebFont.load({
    google: {
      families: [
        'Raleway'
      ]
    }
  });
});
