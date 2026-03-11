function placeOrder(){

let paymentMethod = document.getElementById("payment").value;

if(paymentMethod === "ONLINE"){

window.location = "payment.html";

}else{

window.location = "success.html";

}

}