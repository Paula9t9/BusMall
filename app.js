'use strict';

var allProducts = [];
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var productBox = document.getElementById('product-box');
var allImageElements = [img1, img2, img3];

// Got index idea from Ed to make finding objects easier
function Product(name) {
  this.filepath = `img/${name}.jpg`;
  this.name = name;
  this.views = 0;
  this.clicks = 0;
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

function showRandomProducts(){

  var previousImgs = [];
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
    allProducts[random].views ++;

  }

  console.table(allProducts);
}


function handleProductClick(event){
  console.log('Clicked Event: ' + event.target.alt);
  allProducts[event.target.id].clicks ++;
  showRandomProducts();
}




showRandomProducts();

productBox.addEventListener('click', handleProductClick);

