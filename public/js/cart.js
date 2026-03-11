let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart(){

const container = document.getElementById("cart");
const totalDiv = document.getElementById("total");

container.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price * item.quantity;

container.innerHTML += `

<div class="cart-item">

<img src="${item.image}" width="80">

<div class="cart-info">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<div class="qty">

<button onclick="decrease(${index})">-</button>

<span>${item.quantity}</span>

<button onclick="increase(${index})">+</button>

</div>

<button class="remove-btn" onclick="removeItem(${index})">
Remove
</button>

</div>

</div>

`;

});

totalDiv.innerText = "Total: ₹" + total;

localStorage.setItem("cart",JSON.stringify(cart));

}

function increase(i){

cart[i].quantity++;

renderCart();

}

function decrease(i){

if(cart[i].quantity > 1){

cart[i].quantity--;

}

renderCart();

}

function removeItem(i){

cart.splice(i,1);

renderCart();

}

renderCart();