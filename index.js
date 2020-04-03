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

// Display text and more opacity to images when hovering

let images = document.querySelectorAll('.hover-tip')


// for (let i = 0; i <= images.length; i++) {
//   images[i].onmouseover = function () {
//     console.log('working')
//     images[i].style.opacity = 0.5;
//     document.querySelector('#image-1 p').style.display = 'block';
    
//   }
// }

// for (let i = 0; i <= images.length; i++) {
//   images[i].onmouseout = function () {
//     images[i].style.opacity = 1.0;
//   }
// }
 

//   //document.querySelector('#image-1 p').style.display = 'block';
//  for (let i=0; i<=images.length; i++)
//   {
//     console.log("image:" + images[i])
//     //images[i]('.hover-tip').style.opacity = 0.5;

//   }

// image1.onmouseout = function(){
//   //document.querySelector('#image-1 p').style.display = 'none';
//   document.querySelectorAll('.hover-tip').style.opacity = 1.0;

// console.log('no hover')
// }
