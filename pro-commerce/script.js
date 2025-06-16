const products = [
    { id: 1, name: "Bluetooth Speaker", price: 8500, image: "images/speaker.jpeg" },
    { id: 2, name: "Laptop Stand", price: 6000, image: "images/laptopstand.jpg" },
    { id: 3, name: "LED Desk Lamp", price: 4500, image: "images/lamp.jpg" },
    { id: 4, name: "Wireless Mouse", price: 4500, image: "images/mouse.jpeg" },
    { id: 5, name: "HP Laptop", price: 400000, image: "images/hp.jpg" },
    { id: 6, name: "Dell Laptop", price: 350000, image: "images/dell.jpg" },
    { id: 7, name: "Lenovo Laptop", price: 450000, image: "images/lenovo.jpg" },
    { id: 8, name: "Macbook", price: 800000, image: "images/macbook.jpeg" },
    { id: 9, name: "Laptop Case", price: 10000, image: "images/case.jpg" },
    { id: 10, name: "Acer Laptop", price: 300000, image: "images/acer.jpg" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function renderProducts(filter = "") {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(product => {
        productList.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>₦${product.price.toLocaleString()}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    });
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    saveCart();
    renderCart();
}

function renderCart() {
    const items = document.getElementById("cart-items");
    const total = document.getElementById("total");
    const count = document.getElementById("cart-count");

    items.innerHTML = "";
    let sum = 0;

    cart.forEach((item, i) => {
        items.innerHTML += `<li>${item.name} - ₦${item.price.toLocaleString()} <button onclick="removeFromCart(${i})">x</button></li>`;
        sum += item.price;
    });

    total.textContent = sum.toLocaleString();
    count.textContent = cart.length;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("open");
}

function checkout() {
    alert("Thank you for shopping with us!");
    cart = [];
    saveCart();
    renderCart();
}

document.getElementById("search").addEventListener("input", e => {
    renderProducts(e.target.value);
});

renderProducts();
renderCart();
