var userInput = document.createElement("input")
document.body.appendChild(userInput)
userInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchCity(event.target.value)
    } 
})

// var urbanAreas = [
//     "Aarhus",
//     "Adelaide",
//     "Albuquerque",
//     "Almaty",
//     "Amsterdam",
//     "Anchorage",
//     "Ankara",
//     "Asheville",
//     "Asuncion",
//     "Athens",
//     "Atlanta",
//     "Auckland",
//     "Austin",
//     "Baku",
//     "Bali",
//     "Bangkok",
//     "Barcelona",
//     "Beijing",
//     "Beirut",
//     "Belfast",
//     "Belgrade",
//     "Belize City",
//     "Bengaluru",
//     "Berlin",
//     "Bern",
//     "Birmingham",
//     "Birmingham, AL",
//     "Bogota",
//     "Boise",
//     "Bologna",
//     "Bordeaux",
//     "Boston",
//     "Boulder",
//     "Bozeman",
//     "Bratislava",
//     "Brisbane",
//     "Bristol",
//     "Brussels",
//     "Bucharest",
//     "Budapest",
//     "Buenos Aires",
//     "Buffalo",
//     "Cairo",
//     "Calgary",
//     "Cambridge",
//     "Cape Town",
//     "Caracas",
//     "Cardiff",
//     "Casablanca",
//     "Charleston",
//     "Charlotte",
//     "Chattanooga",
//     "Chennai",
//     "Chiang Mai",
//     "Chicago",
//     "Chisinau",
//     "Christchurch",
//     "Cincinnati",
//     "Cleveland",
//     "Cluj-Napoca",
//     "Cologne",
//     "Colorado Springs",
//     "Columbus",
//     "Copenhagen",
//     "Cork",
//     "Curitiba",
//     "Dallas",
//     "Dar es Salaam",
//     "Delhi",
//     "Denver",
//     "Des Moines",
//     "Detroit",
//     "Doha",
//     "Dresden",
//     "Dubai",
//     "Dublin",
//     "Dusseldorf",
//     "Edinburgh",
//     "Edmonton",
//     "Eindhoven",
//     "Eugene",
//     "Florence",
//     "Florianopolis",
//     "Fort Collins",
//     "Frankfurt",
//     "Fukuoka",
//     "Galway",
//     "Gdansk",
//     "Geneva",
//     "Glasgow",
//     "Gothenburg",
//     "Grenoble",
//     "Guadalajara",
//     "Guatemala City",
//     "Halifax",
//     "Hamburg",
//     "Hannover",
//     "Havana",
//     "Helsinki",
//     "Ho Chi Minh City",
//     "Hong Kong",
//     "Honolulu",
//     "Houston",
//     "Hyderabad",
//     "Indianapolis",
//     "Innsbruck",
//     "Istanbul",
//     "Jacksonville",
//     "Jakarta",
//     "Johannesburg",
//     "Kansas City",
//     "Karlsruhe",
//     "Kathmandu",
//     "Kiev",
//     "Kingston",
//     "Knoxville",
//     "Krakow",
//     "Kuala Lumpur",
//     "Lagos",
//     "La Paz",
//     "Las Palmas de Gran Canaria",
//     "Las Vegas",
//     "Lausanne",
//     "Leipzig",
//     "Lille",
//     "Lima",
//     "Lisbon",
//     "Liverpool",
//     "Ljubljana",
//     "London",
//     "Los Angeles",
//     "Louisville",
//     "Luxembourg",
//     "Lviv",
//     "Lyon",
//     "Madison",
//     "Madrid",
//     "Malaga",
//     "Malmo",
//     "Managua",
//     "Manchester",
//     "Manila",
//     "Marseille",
//     "Medellin",
//     "Melbourne",
//     "Memphis",
//     "Mexico City",
//     "Miami",
//     "Milan",
//     "Milwaukee",
//     "Minneapolis-Saint Paul",
//     "Minsk",
//     "Montevideo",
//     "Montreal",
//     "Moscow",
//     "Mumbai",
//     "Munich",
//     "Nairobi",
//     "Nantes",
//     "Naples",
//     "Nashville",
//     "New Orleans",
//     "New York",
//     "Nice",
//     "Nicosia",
//     "Oklahoma City",
//     "Omaha",
//     "Orlando",
//     "Osaka",
//     "Oslo",
//     "Ottawa",
//     "Oulu",
//     "Oxford",
//     "Palo Alto",
//     "Panama",
//     "Paris",
//     "Perth",
//     "Philadelphia",
//     "Phnom Penh",
//     "Phoenix",
//     "Phuket",
//     "Pittsburgh",
//     "Portland, ME",
//     "Portland, OR",
//     "Porto",
//     "Porto Alegre",
//     "Prague",
//     "Providence",
//     "Quito",
//     "Raleigh",
//     "Reykjavik",
//     "Richmond",
//     "Riga",
//     "Rio De Janeiro",
//     "Riyadh",
//     "Rochester",
//     "Rome",
//     "Rotterdam",
//     "Saint Petersburg",
//     "Salt Lake City",
//     "San Antonio",
//     "San Diego",
//     "San Francisco Bay Area",
//     "San Jose",
//     "San Juan",
//     "San Luis Obispo",
//     "San Salvador",
//     "Santiago",
//     "Santo Domingo",
//     "Sao Paulo",
//     "Sarajevo",
//     "Saskatoon",
//     "Seattle",
//     "Seoul",
//     "Seville",
//     "Shanghai",
//     "Singapore",
//     "Skopje",
//     "Sofia",
//     "St. Louis",
//     "Stockholm",
//     "Stuttgart",
//     "Sydney",
//     "Taipei",
//     "Tallinn",
//     "Tampa Bay Area",
//     "Tampere",
//     "Tartu",
//     "Tashkent",
//     "Tbilisi",
//     "Tehran",
//     "Tel Aviv",
//     "The Hague",
//     "Thessaloniki",
//     "Tokyo",
//     "Toronto",
//     "Toulouse",
//     "Tunis",
//     "Turin",
//     "Turku",
//     "Uppsala",
//     "Utrecht",
//     "Valencia",
//     "Valletta",
//     "Vancouver",
//     "Victoria",
//     "Vienna",
//     "Vilnius",
//     "Warsaw",
//     "Washington, D.C.",
//     "Wellington",
//     "Winnipeg",
//     "Wroclaw",
//     "Yerevan",
//     "Zagreb",
//     "Zurich" ];

// function autocomplete(inp, arr) {
//     /*the autocomplete function takes two arguments,
//     the text field element and an array of possible autocompleted values:*/
//     var currentFocus;
//     /*execute a function when someone writes in the text field:*/
//     inp.addEventListener("input", function (e) {
//         var a, b, i, val = this.value;
//         /*close any already open lists of autocompleted values*/
//         closeAllLists();
//         if (!val) { return false; }
//         currentFocus = -1;
//         /*create a DIV element that will contain the items (values):*/
//         a = document.createElement("DIV");
//         a.setAttribute("id", this.id + "autocomplete-list");
//         a.setAttribute("class", "autocomplete-items");
//         /*append the DIV element as a child of the autocomplete container:*/
//         this.parentNode.appendChild(a);
//         /*for each item in the array...*/
//         for (i = 0; i < arr.length; i++) {
//             /*check if the item starts with the same letters as the text field value:*/
//             if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//                 /*create a DIV element for each matching element:*/
//                 b = document.createElement("DIV");
//                 /*make the matching letters bold:*/
//                 b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//                 b.innerHTML += arr[i].substr(val.length);
//                 /*insert a input field that will hold the current array item's value:*/
//                 b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//                 /*execute a function when someone clicks on the item value (DIV element):*/
//                 b.addEventListener("click", function (e) {
//                     /*insert the value for the autocomplete text field:*/
//                     inp.value = this.getElementsByTagName("input")[0].value;
//                     /*close the list of autocompleted values,
//                     (or any other open lists of autocompleted values:*/
//                     closeAllLists();
//                 });
//                 a.appendChild(b);
//             }
//         }
//     });

//     /*execute a function presses a key on the keyboard:*/
//     inp.addEventListener("keydown", function (e) {
//         var x = document.getElementById(this.id + "autocomplete-list");
//         if (x) x = x.getElementsByTagName("div");
//         if (e.keyCode == 40) {
//             /*If the arrow DOWN key is pressed,
//             increase the currentFocus variable:*/
//             currentFocus++;
//             /*and and make the current item more visible:*/
//             addActive(x);
//         } else if (e.keyCode == 38) { //up
//             /*If the arrow UP key is pressed,
//             decrease the currentFocus variable:*/
//             currentFocus--;
//             /*and and make the current item more visible:*/
//             addActive(x);
//         } else if (e.keyCode == 13) {
//             /*If the ENTER key is pressed, prevent the form from being submitted,*/
//             e.preventDefault();
//             if (currentFocus > -1) {
//                 /*and simulate a click on the "active" item:*/
//                 if (x) x[currentFocus].click();
//             }
//         }
//     });

//     function addActive(x) {
//         /*a function to classify an item as "active":*/
//         if (!x) return false;
//         /*start by removing the "active" class on all items:*/
//         removeActive(x);
//         if (currentFocus >= x.length) currentFocus = 0;
//         if (currentFocus < 0) currentFocus = (x.length - 1);
//         /*add class "autocomplete-active":*/
//         x[currentFocus].classList.add("autocomplete-active");
//     }

//     function removeActive(x) {
//         /*a function to remove the "active" class from all autocomplete items:*/
//         for (var i = 0; i < x.length; i++) {
//             x[i].classList.remove("autocomplete-active");
//         }
//     }
//     function closeAllLists(elmnt) {
//         /*close all autocomplete lists in the document,
//         except the one passed as an argument:*/
//         var x = document.getElementsByClassName("autocomplete-items");
//         for (var i = 0; i < x.length; i++) {
//             if (elmnt != x[i] && elmnt != inp) {
//                 x[i].parentNode.removeChild(x[i]);
//             }
//         }
//     }
//     /*execute a function when someone clicks in the document:*/
//     document.addEventListener("click", function (e) {
//         closeAllLists(e.target);
//     });

// }

// /*initiate the autocomplete function on the "myInput" element, and pass along the urbanAreas array as possible autocomplete values:*/
// autocomplete(document.getElementById("myInput"), urbanAreas);

// //autocomplete code from: https://www.w3schools.com/howto/howto_js_autocomplete.asp

function callCity(search) {
    return fetch(`https://api.teleport.org/api/cities/?search=${search}`)
}

function searchCity(city) {
    city = city.replaceAll(' ', '-');

    callCity(city)
    .then(response => response.json())
    .then(data => {
    console.log(data)
    })
}

function callCity(search) {
    return fetch(`https://api.teleport.org/api/urban_areas/slug:${search}/details/`)
}

function callCity(search) {
    return fetch(`https://teleport.org/urban_areas/slug:${search}/details/`)
}


