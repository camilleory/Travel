//Googe Map

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.120850),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Selection menu

let select = document.querySelector('#continents')
let health = document.querySelectorAll('.packing-stuff')[0]
let cloth = document.querySelectorAll('.packing-stuff')[1]
let sun = document.querySelectorAll('.packing-stuff')[2]
let sea = document.querySelectorAll('.packing-stuff')[3]
let documents = document.querySelectorAll('.packing-stuff')[4]
let tourist = document.querySelectorAll('.packing-stuff')[5]
let suitcase = document.querySelector('#suitcase');


select.onchange = function () {
  let selectedCountry = $("#continents").val();
  if (selectedCountry === "Asia") {
    asia()
  }
  if (selectedCountry === "Africa") {
    africa()
  }
  if (selectedCountry === "Europe") {
    europe()
  }
  if (selectedCountry === "Americas") {
    americas()
  }
  if (selectedCountry === "Australia") {
    australia()
  }
  if (selectedCountry === "choice") {
    choice()
  }
};

function choice() {
  health.style.display = "none"
  cloth.style.display = 'none';
  sun.style.display = "none";
  sea.style.display = "none"
  documents.style.display = 'none';
  tourist.style.display = 'none';
}

function europe() {
  health.style.display = "none"
  cloth.style.display = 'block';
  sun.style.display = "none";
  sea.style.display = "none"
  documents.style.display = 'block';
  tourist.style.display = 'block';
  suitcase.style.display = 'none';

}

function asia() {
  health.style.display = "none"
  cloth.style.display = 'none';
  sun.style.display = "block";
  sea.style.display = "block"
  documents.style.display = 'block';
  tourist.style.display = 'block';
  suitcase.style.display = 'none';

}

function africa() {
  health.style.display = "block"
  cloth.style.display = 'none';
  sun.style.display = "block";
  sea.style.display = "none"
  documents.style.display = 'block';
  tourist.style.display = 'block';
  suitcase.style.display = 'none';

}

function americas() {
  health.style.display = "none"
  cloth.style.display = 'block';
  sun.style.display = "block";
  sea.style.display = "none"
  documents.style.display = 'block';
  tourist.style.display = 'block';
  suitcase.style.display = 'none';

}

function australia() {
  health.style.display = "block"
  cloth.style.display = 'none';
  sun.style.display = "block";
  sea.style.display = "block"
  documents.style.display = 'block';
  tourist.style.display = 'none';
  suitcase.style.display = 'none';

}

// Planning section

let europeArr = [
  { 
    continent: "Europe",
    country: "Switzerland",
    bestMonth: [11, 12, 1, 2],
    budget: [3]
  },
  { 
    continent: "Europe",
    country: "Portugal",
    bestMonth: [3, 4, 5],
    budget: [1, 2]
  },
  { 
    continent: "Europe",
    country: "France",
    bestMonth: [6, 7, 8, 9, 10],
    budget: [2, 3]
  },
  { 
    continent: "Europe",
    country: "Austria",
    bestMonth: [11, 12, 1, 2],
    budget: [1, 2]
  },
  { 
    continent: "Europe",
    country: "England",
    bestMonth: [3, 4, 5],
    budget: [3]
  },
  { 
    continent: "Europe",
    country: "Poland",
    bestMonth: [6, 7, 8, 9, 10],
    budget: [1]
  },
  { 
    continent: "Asia",
    country: "Singapour",
    bestMonth: [11, 12, 1, 2],
    budget: [3]
  },
  { 
    continent: "Asia",
    country: "China",
    bestMonth: [3, 4, 5],
    budget: [1, 2]
  },
  { 
    continent: "Asia",
    country: "Japan",
    bestMonth: [6, 7, 8, 9, 10],
    budget: [2, 3]
  },
  { 
    continent: "Asia",
    country: "Thailand",
    bestMonth: [11, 12, 1, 2],
    budget: [1, 2]
  },
  { 
    continent: "Asia",
    country: "Taiwan",
    bestMonth: [3, 4, 5],
    budget: [3]
  },
  { 
    continent: "Asia",
    country: "Nepal",
    bestMonth: [6, 7, 8, 9, 10],
    budget: [2]
  },
];


// Getting value of month input, changing value to number, fetching best country for number
document.querySelector('#planning input').onchange = function(){

  let chosenMonth = document.querySelector('#planning input').value
  let newFormat = Number(chosenMonth.split("-")[1])
  console.log('this is the chosen month by user:', newFormat)

  let printedCountry = europeArr.filter(el => el.bestMonth.includes(newFormat))
  console.log('this is the recommended country:', printedCountry[0].country)
}

//Same for budget
document.querySelector('#budget').onchange = function(){

let selectedBudget = $("#budget").val();
let newBudgetFormat = Number(selectedBudget)
console.log('budget chosen by user:', newBudgetFormat)


// Applying Month and Budget filter
let printedCountry2 = europeArr.filter(el => el.budget.includes(newBudgetFormat) && el.bestMonth.includes(Number(document.querySelector('#planning input').value.split("-")[1])))
console.log('this is the recommended country:', printedCountry2[0].country)



document.querySelector('#recommandation h3').innerHTML = printedCountry2[0].country
}


//Responsive navbar

let menu = document.querySelector('nav img')
let menuItems = document.querySelectorAll('nav li')
  menu.onclick = function() {
    for (let i=0; i<menuItems.length; i++){
      if (menuItems[i].style.display === 'none'){
        menuItems[i].style.display = 'block'
    } else {
      menuItems[i].style.display = 'none'
    }
  }
}

// Display text on images when hovered

let images = document.querySelectorAll('.hover-tip')
for (let i = 0; i <= images.length; i++){
  document.querySelectorAll('.hover-tip p')[i].style.display = 'none'
  images[i].onmouseover = function () {
    document.querySelectorAll('.hover-tip p')[i].style.display = 'block'
  }
  images[i].onmouseout = function () {
    document.querySelectorAll('.hover-tip p')[i].style.display = 'none'
  }
}