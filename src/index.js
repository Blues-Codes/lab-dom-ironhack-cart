// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

    const price = product.querySelector('.price span').innerText;
    const quantity = product.querySelector('.quantity input').value; 
  
    let subtotal = price * quantity 
    const subtotal2 = product.querySelector('.subtotal span');
     subtotal2.innerText = subtotal;
     return subtotal
  }
    
  

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const multiproducts = document.querySelectorAll('.product');
  for (let i =0; i <multiproducts.length; i++){
  updateSubtotal(multiproducts[i]);
  }
  // end of test

  // ITERATION 2
  // const hatPrice = document.querySelector('.price span').innerText;
  // const hatQuantity= document.querySelector('.quantity input').value;
  // const allTotal= hatPrice * hatQuantity;
  // const allTotal2 = document.querySelectorAll('.subtotal span');
  // allTotal2.innerText = allTotal;
  
  // console.log(allTotal)
  // ITERATION 3
    const allProducts = document.getElementsByClassName('product');
    let totalPrice = document.querySelector('#total-value span');
    let total = 0;
    for (let i = 0; i < allProducts.length; i++) {
      total += +(updateSubtotal(allProducts[i]));
    }
    totalPrice.innerHTML = total;
  }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const row = target.parentNode.parentNode;

  const parent = row.parentNode;

  parent.removeChild(row)

// ITERATION 5


function createProduct(e) {
  const row = e.currentTarget.parentNode.parentNode
  const name = row.querySelector("#name").value
  const price = row.querySelector("#price").value
  const table = document.getElementById("table")

  let product = `
  <tr class="product">
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>
  `

  table.innerHTML += product

  let removeButtons = table.querySelectorAll(".btn-remove")

  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct)
  }

  const newNameInput = document.getElementById('name')
  const newPriceInput = document.getElementById('price')

  newNameInput.value = ""
  newPriceInput.value = ""


  console.log("creating product", table)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductButtons =  document.querySelectorAll(".btn-remove");
  for (let removeButton of removeProductButtons){
  removeButton.addEventListener('click', removeProduct)};

  const newProductButton = document.querySelector(".create-product button")
  if (newProductButton) {
    newProductButton.addEventListener('click', createProduct);
    }
  });
}