// Script.js

window.addEventListener('DOMContentLoaded', () => {

  if(localStorage.getItem('ourItems') === null) {
    console.log("Hello");
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => localStorage.setItem('ourItems', JSON.stringify(data)));
  }
  console.log("Hello2");
  
});