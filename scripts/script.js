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

  console.log(itemsJSON);
  let productList = document.getElementById('product-list');
  let cartCount = document.getElementById('cart-count');

  // restore count
  let count;
  if(localStorage.getItem('count') === null) {
    count = 0;
    localStorage.setItem('count', JSON.stringify(count));
  }
  count = JSON.parse(localStorage.getItem('count'));
  cartCount.textContent = count;

  // added items
  let added;
  if(localStorage.getItem('addedItems') === null) {
    added = ["","","","","","","","","","","","","","","","","","","",""];
    localStorage.setItem('addedItems', JSON.stringify(added));
  }
  added = JSON.parse(localStorage.getItem('addedItems'));


  // go through all JSON items
  for(let i = 0; i< itemsJSON.length; i++) {

    // create custom element
    let currProduct = document.createElement('product-item');

    // set image, alt, price, and title
    currProduct.shadowRoot.getElementById('itemImg').src=itemsJSON[i].image;
    currProduct.shadowRoot.getElementById('itemImg').alt=itemsJSON[i].title;
    currProduct.shadowRoot.getElementById('titleP').textContent=itemsJSON[i].title;
    currProduct.shadowRoot.getElementById('priceP').textContent="$" + itemsJSON[i].price;

    if(added[itemsJSON[i].id] === "y") {
      currProduct.shadowRoot.getElementById('cartBtn').textContent = "Remove from Cart";
    }
    // onclick for the add to cart/ remove from cart button
    currProduct.shadowRoot.getElementById('cartBtn').onclick = () => {
      console.log("clicked" + currProduct.shadowRoot.getElementById('cartBtn').textContent);
      if(currProduct.shadowRoot.getElementById('cartBtn').textContent == "Add to Cart") {
        currProduct.shadowRoot.getElementById('cartBtn').textContent = "Remove from Cart";
        count++;
        cartCount.textContent = count;
        added[itemsJSON[i].id] = "y";
        localStorage.setItem('addedItems', JSON.stringify(added));
        localStorage.setItem('count', JSON.stringify(count));
      }
      else {
        currProduct.shadowRoot.getElementById('cartBtn').textContent = "Add to Cart";
        count--;
        cartCount.textContent = count;
        added[itemsJSON[i].id] = "";
        localStorage.setItem('addedItems', JSON.stringify(added));
        localStorage.setItem('count', JSON.stringify(count));
      }
    }

    console.log(added);
    productList.appendChild(currProduct);
  }
  
  
});

