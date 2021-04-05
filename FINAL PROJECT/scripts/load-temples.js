window.addEventListener('load', ()=>{
    const requestURL = '/FINAL PROJECT/temple_list.json'
    //This line is retrieving the json file and converting it to usable data
    fetch(requestURL)
    //Now that the data is retrieved, it is now converted to a json file type
    .then ((response)=> {
        return response.json();
    })
    .then((jsonObject)=> {
        Object.entries(jsonObject).forEach(([key, temple])=> {
            buildTempleCard(temple);
        })
    })
});
function buildTempleCard(temple) {
    text = ''
    for (var i = 0; i < temple.closure.length; i++) {
    text += temple.closure[i] + "<br>";
    }
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = `<h2>${temple.name}</h2>
                        <img src = "${temple.imageurl}" alt = "${temple.name}">
                        <p><b>Address:</b> ${temple.address1} <br> ${temple.city}, ${temple.state} ${temple.zip} </p>
                        <p>Schedule: ${temple.schedule}</p>
                        <p>Closure Dates: <br>${text}</p>`;
 
   
    document.querySelector("#temples").appendChild(card);
}; 