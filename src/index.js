// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')

  const priceValue = price.innerText
  const quantityValue = quantity.value


  const updatedSubtotal = String((Number(priceValue) * Number(quantityValue)).toFixed(2))

  subtotal.innerText = updatedSubtotal
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = document.querySelectorAll('.product');
  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i])
  }

  const subtotals = document.querySelectorAll('.subtotal span')
  let total = document.querySelector('#total-value span')

  let numberTotal = 0

  for (let i = 0; i < subtotals.length; i++) {
    console.log("numberTotal:", numberTotal)
    numberTotal += Number(subtotals[i].innerText)
  }

  let formattedTotal = String(numberTotal.toFixed(2))

  total.innerText = formattedTotal
  // end of test

  // ITERATION 2tet
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const row = target.parentNode.parentNode;

  const parent = row.parentNode;

  parent.removeChild(row)

  //... your code goes here
}

// ITERATION 5



function createProduct() {

  const createRow = document.querySelector('.create-product');
  let newProdNameInput = createRow.querySelector('input');
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);

  const newProductRow = document.createElement('tr');
  newProductRow.className = 'product';
  newProductRow.innerHTML = `
    <td class="name">
      <span>${newProdNameValue}</span>
    </td>
    <td class="price">$<span>${newProdPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</>
    </td>
  `;


  const parent = document.querySelector('#cart tbody');


  parent.appendChild(newProductRow);
  console.log(newProductRow)
  console.log("Create Clicked")

  const removeBtn = newProductRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  // clean the fields
  newProdNameInput.value = '';
  newProdPriceInput.value = 0;
  //... your code goes here
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

  //... your code goes here
});