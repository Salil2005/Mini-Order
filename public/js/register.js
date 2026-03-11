function registerUser(){

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;

/* Check empty fields */

if(!name || !email || !password || !confirmPassword){

alert("Please fill all fields");

return;

}

/* Check password match */

if(password !== confirmPassword){

alert("Passwords do not match");

return;

}

/* Send request */

fetch("/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
password
})

})

.then(res=>res.json())

.then(data=>{

alert(data.message);

if(data.message === "User Registered"){

window.location="login.html";

}

});

}