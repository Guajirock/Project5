"user strict";
let cart = window.localStorage.getItem("cart");
let cartArray= JSON.parse(cart);
console.log(cart);

const cardItems= document.getElementById('cart__items');

// const html = `
//              <article class="cart__item" data-id="${cart._id.map(id)}">
//                 <div class="cart__item__img">
//                   <img src="${cart.imageUrl.map(imageUrl)}" alt="${cart.altTxt.map(altTxt)}">
//                 </div>
//                 <div class="cart__item__content">
//                   <div class="cart__item__content__titlePrice">
//                     <h2>${cart.description.map(name)}</h2>
//                     <p>Product Option</p>
//                     <p>€</p>
//                   </div>
//                   <div class="cart__item__content__settings">
//                     <div class="cart__item__content__settings__quantity">
//                       <p>Qté : </p>
//                       <input id="quantity" type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="1">
//                     </div>
//                     <div class="cart__item__content__settings__delete">
//                       <p class="deleteItem">Delete</p>
//                     </div>
//                   </div>
//                 </div>
//               </article> 
// `;
function makeCards (cartArray) {
  for(let i=0; i<cartArray.length; i++){
    const text=document.createElement('p');
    text.innerText='"hello"'
    cardItems.appendChild(text);
  }

}
makeCards(cartArray);