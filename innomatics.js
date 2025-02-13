document.addEventListener("DOMContentLoaded", function() {
    loadCart();
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    saveCart();
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");
    let cartCount = document.getElementById("cart-count");
    
    cartItems.innerHTML = "";
    let total = 0;
    let itemCount = 0;
    
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price} x ${item.quantity} 
            <button onclick="changeQuantity(${index}, -1)">-</button> 
            <button onclick="changeQuantity(${index}, 1)">+</button>`;
        
        cartItems.appendChild(li);
        total += item.price * item.quantity;
        itemCount += item.quantity;
    });
    
    totalPrice.textContent = total.toFixed(2);
    cartCount.textContent = itemCount;
}

function changeQuantity(index, amount) {
    if (cart[index].quantity + amount > 0) {
        cart[index].quantity += amount;
    } else {
        cart.splice(index, 1);
    }
    saveCart();
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCart();
}

function clearCart() {
    cart = [];
    saveCart();
    updateCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCart();
}

function toggleCart() {
    let cartElement = document.getElementById("cart");
    cartElement.style.display = cartElement.style.display === "block" ? "none" : "block";
}
