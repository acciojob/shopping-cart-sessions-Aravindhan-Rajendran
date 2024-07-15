// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartinglist=document.getElementById("cart-list");
// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
	const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  addToCartButtons.forEach(button => button.addEventListener('click', event => {
    const productId = parseInt(event.target.getAttribute('data-id'));
    addToCart(productId);
  }));
}

}
// Create a cart array
const cart = [];

// Add item to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    renderCart();
  }
}

// Remove item from cart
function removeFromCart(productId) {
  const index = cart.findIndex(p => p.id === productId);
  if (index > -1) {
    cart.splice(index, 1);
    renderCart();
  }
}

// Render cart list
function renderCart() {
  cartinglist.innerHTML = '';
  cart.forEach(product => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price}`;
    cartinglist.appendChild(li);
  });
}

// Clear cart
function clearCart() {
  cart.length = 0;
  renderCart();
}

// Add event listener to clear cart button
document.getElementById("clear-cart-btn").addEventListener('click', clearCart);

// Initial render
renderProducts();