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
