let unique = location.search.substring(4);
const container = document.getElementById("product");

let cartString = localStorage.getItem('cart') || '[]';
let cartArray = JSON.parse(cartString);
//empty object to be updated onclick
const currentProduct = {
  _id: '', 
  name: '',
  price:0,
  description: '',
  color: '',
  quantity:0,
  imageUrl: '',
}

fetch(`http://localhost:3000/api/products/${unique}`, {})
  .then((response) => response.json())
  .then((data) => {
    fillObject(data); // this function  fills the currentProduct
    createCard(data);

  })
  .catch((err) => console.log("we hit an error", err));
// fills currentproduct with selected item object
function fillObject(obj) { 
  currentProduct._id =obj._id;
  currentProduct.name = obj.name;
  currentProduct.price = obj.price;
  currentProduct.description = obj.description;
  currentProduct.color = obj.color;
  currentProduct.quantity = obj.quantity;
  currentProduct.imageUrl = obj.imageUrl;
}

// creates Card to display on html
function createCard(data) {
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
        <select name="color-select" id="colors" onchange="updateCurrentProduct(this.value)">
            <option value="">--Select a color--</option>
            <!-- map to display only indexed items-->
            ${data.colors.map(
              (color) =>
                "<option value=" + color + ">" + color + "</option>"
            )}
        </select>
      </div>

      <div class="item__content__settings__quantity">
        <label for="itemQuantity">Number of articles (1-100):</label>
        <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity" onchange="updateCurrentProduct(this.value)">
      </div>
    </div>

    <div class="item__content__addButton">
      <button id="addToCart" onClick="updateCurrentProduct(this.value)" >Add to cart</button>
    </div>

  </div>
</article>`;
 
product.insertAdjacentHTML("beforeend", html);
 
};
//capture values from Html
 function updateCurrentProduct(val){
  currentProduct.color = document.querySelector("#colors").value;
  currentProduct.quantity = document.querySelector("#quantity").value;
   console.log(currentProduct);
 }


 function storeProduct(value) {
  
localStorage.setItem('currentProduct', currentProduct);
// console.log(localStorage.getItem('currentProduct')); 
//console.log(currentProduct);  
}
 storeProduct ();

 /*function gather() {
  let selectedItem = [];
  let sofa = document.querySelector("#title").innerText;
  console.log(sofa);
  selectedItem.push("_id", "name", "price", "imageUrl", "altTxt", "colors", "quantity");//pull data instead?
  console.log(selectedItem);
    
 }
 */

  /* selectedItem.push("_id", "name", "price", "imageUrl", "altTxt", "colors", "quantity");
    console.log(selectedItem);
    
    function gather(data) {
        let sofa= [];
        document.querySelector("_id", "name", "price", "imageUrl", "altTxt", "colors", "quantity");
        data= JSON.stringify(data);
        sofa = JSON.parse(data);
        console.log(sofa);
    }*/
   //"_id".value, "name".value, "price".value, "imageUrl".value, "altTxt".value, "colors".value, "itemQuantity".value
    
// TODO

// Catch values from Html
// Pass array values to function that stores choosen  customized item to localStorage

// "_id".value, "name".value, "price".value, "imageUrl".value, "altTxt".value, "colors".value, "itemQuantity".value