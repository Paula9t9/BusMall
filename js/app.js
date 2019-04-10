'use strict';

var clicksRemaining = 25;

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var productBox = document.getElementById('product-box');
var clicksRemElement = document.getElementById('clicks-remaining');
var completeElement = document.getElementById('complete');

var allImageElements = [img1, img2, img3];
var previousImgs = [];
var allProducts = [];
var namesArr = [];
var viewsArr = [];
var clicksArr = [];
var clickThroughArr = [];


/* Object construction */

// Got index idea from Ed to make finding objects easier
function Product(name) {
  this.filepath = `../img/${name}.jpg`;
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.clickThrough = 0;
  this.index = allProducts.length;
  allProducts.push(this);
}

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep');
new Product('tauntaun');
new Product('unicorn');
new Product('usb');
new Product('water-can');
new Product('wine-glass');


/* Function declarations */

function showRandomProducts(){

  if (previousImgs.length > 2){
    previousImgs[3] = previousImgs[0];
    previousImgs[4] = previousImgs[1];
    previousImgs[5] = previousImgs[2];
    console.log('Previous images added to end of array');
  }


  for(var i = 0; i < 3; i++){
    var random = 0;

    do {

      random = Math.floor(Math.random() * allProducts.length);
      allImageElements[i].src = allProducts[random].filepath;
      allImageElements[i].alt = allProducts[random].name;
      allImageElements[i].title = allProducts[random].name;
      allImageElements[i].id = allProducts[random].index;

    } while (previousImgs.includes(allProducts[random].name));

    previousImgs[i] = allProducts[random].name;
    allProducts[random].views++;
    updateDataArrays();

  }
  console.log('Previous images: ' + previousImgs);
  console.table(allProducts);
}


function updateDataArrays() {
  for (var i = 0; i < allProducts.length; i++) {
    namesArr[i] = allProducts[i].name;
    viewsArr[i] = allProducts[i].views;
    clicksArr[i] = allProducts[i].clicks;

    //Caluclates the clickthrough percentage
    allProducts[i].clickThrough = Math.round((allProducts[i].clicks/allProducts[i].views) * 100);
    clickThroughArr[i] = allProducts[i].clickThrough;

  }
}


function handleProductClick(event){
  if (keepGoing()){
    console.log('Clicked Event: ' + event.target.alt);
    allProducts[event.target.id].clicks++;
    clicksRemaining --;
    clicksRemElement.innerHTML = clicksRemaining;
    updateDataArrays();
    showRandomProducts();
  } else {
    // Used this to figure out why visibility wasn't changing: https://www.w3schools.com/jsref/prop_style_visibility.asp
    productBox.style.visibility = 'hidden';
    completeElement.style.visibility = 'visible';
    displayChart();
    showProductsAsList();
  }

}


function keepGoing(){
  if(clicksRemaining <= 0){
    return false;
  } else {
    return true;
  }
}

function showProductsAsList() {
  var productListElement = document.getElementById('product-list');
  productListElement.innerHTML = '';
  for (var i = 0; i < allProducts.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = allProducts[i].name + ', ' + allProducts[i].clicks + ' votes';
    productListElement.appendChild(liEl);
  }
}


function displayChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart (ctx, {
    type: 'bar',
    data: {
      labels: namesArr,
      datasets: [{
        label: 'Number of Clicks',
        data: clicksArr,
        backgroundColor: [
          // Grabbed colors from here: http://www.menucool.com/rgba-color-picker
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
          'rgba(51,255,51,0.2)',
        ]
      },
      {
        label: 'Number of Views',
        data: viewsArr,
        backgroundColor: [
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
          'rgba(0,51,204,0.2)',
        ]
      },
      {
        label: 'Clickthrough Percent',
        data: clickThroughArr
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


/* Execution */

showRandomProducts();

productBox.addEventListener('click', handleProductClick);

