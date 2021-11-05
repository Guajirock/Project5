//Retrieving objects from server- Convert to Json
const sofas= document.querySelector('#items');
fetch("http://localhost:3000/api/products")
  .then((response) => response.json()) 
  .then((data) => product(data))
  .catch((error) => console.log(error));

const product = function (data) {
  console.log(data);
}

// loop to iterate products
for (let i = 0; i < product.length; i++) {
  const html = `<section id="items">
  <a href=".sectionhtml?id=${data[i]._id}"> 
  <article>
  <img src="${data[i].imageUrl}" alt="${data[i].altTxt}">
              <h3 class="productName">${data[i].name}"</h3>
              <p class="productDescription">${data[i].description}</p>

  </article>
   
  </a> 
  </section>`;
  sofas.insertAdjacentHTML('beforeend',html);
}

//cart js
// function? to store selected item to cart
let selectedItem = ["_id", "name","price", "imageUrl","altTxt","colors","itemQuantity"];
function setSelect(localStorage.selectedItem) {
  
}
localStorage.selectedItem["_id", "name",'"price", "imageUrl","altTxt","colors","itemQuantity"];
console.log(selectedItem);



let unique = location.search.substring(4);
const container = document.getElementById("product");

fetch(`http://localhost:3000/api/products/${unique}`, {})
  .then((response) => response.json())
  .then((data) => {
    createCard(data);
  })

  .catch((err) => console.log("we hit an error", err));

const createCard = function (data) {
  const product = document.getElementsByClassName("item")[0];
  //console.log(product);
  const html = `
  <article>
  <div class="item__img">
    <img src="${data.imageUrl}" alt="${data.altTxt}"> 
  </div>
  <div class="item__content">

    <div class="item__content__titlePrice">
      <h1 id="title">"${data.name}"</h1>
      <p>Prix : <span id="price">"${data.price}"</span>€</p>
    </div>

    <div class="item__content__description">
      <p class="item__content__description__title">Description:</p>
      <p id="description">"${data.description}"</p>
    </div>

    <div class="item__content__settings">
      <div class="item__content__settings__color">
        <label for="color-select">Choose your color:</label>
        <select name="color-select" id="colors">
            <option value="">--Select a color--</option>
            <!-- map to display only indexed items-->
            ${data.colors.map(
              (color, index) =>
                "<option value=" + index + ">" + color + "</option>"
            )}
        </select>
      </div>

      <div class="item__content__settings__quantity">
        <label for="itemQuantity">Number of articles (1-100):</label>
        <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
      </div>
    </div>

    <div class="item__content__addButton">
      <button id="addToCart" onclick="gather()">Add to cart</button>
    </div>

  </div>
</article>`;
  
    

  product.insertAdjacentHTML("beforeend", html);
};
let selectedItem = [];
    console.log(selectedItem);
    selectedItem.push("_id".value, "name".value, "price".value, "imageUrl".value, "altTxt".value, "colors".value, "itemQuantity".value);
    console.log(selectedItem);
    
    function gather(selectedItem) {
        let option = ([
            getElementById(selectedItem)
        ])
    }
    
    function doSomething(id, value) {
      console.log(value);
      //...
    }
    
// DUDAS...
// Como hacer el mismo fetch con query parameters
// de aca todo pasa a local storage? Como llevar las cantidades y colores seleccionados al cart?
// Capturar valores de los Id Html
//transformar in objeto para pasarla a una funcion que convierta eso en un arreglo para almacenar en localStorage