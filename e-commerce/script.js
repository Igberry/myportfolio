const products = [
    { id: 1, name: 'Wireless Headphones', price: 15000, image: 'images/headphone.png' },
    { id: 2, name: 'Smart Watch', price: 50000, image: 'images/smartwatch.jpg' },
    { id: 3, name: 'Bag Pack', price: 12000, image: 'images/bagpack.jpg' },
    { id: 4, name: 'Purse', price: 7000, image: 'images/purse.jpg' },
    { id: 5, name: 'Bracelet', price: 9000, image: 'images/bracelet.jpg' },
    { id: 6, name: 'Wireless Microphone', price: 8500, image: 'images/microphone.jpg' },
    { id: 7, name: 'T-Shirt', price: 14000, image: 'images/tshirts.jpg' },
    { id: 8, name: 'Shirts', price: 8000, image: 'images/shirts.jpg' },
    { id: 9, name: 'Internet Cable', price: 5000, image: 'images/cable.jpg' },
    { id: 10, name: 'HDMI Cord', price: 4500, image: 'images/hdmi.jpg' },
    { id: 11, name: 'Iphone 12 Pro Pouch', price: 2500, image: 'images/iphone.jpeg' },
    { id: 12, name: 'Face Cap', price: 3500, image: 'images/facecap.jpg' }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        productList.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₦${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    saveCart();
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');
    const cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = '';
    let sum = 0;
    cart.forEach((item, index) => {
        cartItems.innerHTML += `<li>${item.name} - ₦${item.price.toFixed(2)} 
      <button onclick="removeFromCart(${index})">Remove</button></li>`;
        sum += item.price;
    });

    cartCount.textContent = cart.length;
    total.textContent = sum.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

renderProducts();
renderCart();
