"use strict";
//Retrieving objects from server- Convert to Json

const products = document.querySelector("#items");
fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((data) => product(data))
  .catch((error) => console.log(error));

const product = function (data) {
  console.log(data);
  // Loop to iterate products
  for (let i = 0; i < data.length; i++) {
    const html = `
    <section id="items">
      <a href="product.html?id=${data[i]._id}"> 
        <article>
          <img src="${data[i].imageUrl}" alt="${data[i].altTxt}">
          <h3 class="productName">${data[i].name}"</h3>
          <p class="productDescription">${data[i].description}</p>
        </article>
      </a> 
    </section>`;
    products.insertAdjacentHTML("beforeend", html);
  }
};