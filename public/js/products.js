fetch("/products")
.then(res => res.json())
.then(data => {

const container = document.getElementById("products");

data.forEach(product => {

const card = document.createElement("div");

card.className = "product-card";

card.innerHTML = `
<img src="${product.image_url}">
<h3>${product.name}</h3>
<p>₹${product.price}</p>

<button class="btn"
onclick="addToCart(${product.id},'${product.name}',${product.price},'${product.image_url}')">
Add to Cart
</button>
`;

container.appendChild(card);

});

});

function addToCart(id,name,price,image){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let existing = cart.find(item => item.id === id);

if(existing){

existing.quantity++;

}else{

cart.push({
id,
name,
price,
image,
quantity:1
});

}

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to Cart");

}