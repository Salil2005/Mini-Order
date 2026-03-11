fetch("/orders")

.then(res=>res.json())

.then(data=>{

const div=document.getElementById("orders");

data.forEach(o=>{

div.innerHTML+=`

<div class="order-card">

<div>

<h3>${o.name}</h3>

<p>Qty: ${o.quantity}</p>

<p>₹${o.price}</p>

</div>

<div>

<p>Status: ${o.payment_status}</p>

</div>

</div>

`;

});

});