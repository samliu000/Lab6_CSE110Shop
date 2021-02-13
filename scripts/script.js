// Script.js

window.addEventListener('DOMContentLoaded', () => {

  // only fetch if localStorage does not have the items
  if(localStorage.getItem('ourItems') === null) {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => localStorage.setItem('ourItems', JSON.stringify(data)));
  }

  // get the json data from local storage
  var items = localStorage.getItem('ourItems');
  var itemsJSON = JSON.parse(items);

  
  
});