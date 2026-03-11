const express = require("express");
const pool = require("./db");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

app.use(cors());
app.use(express.json());

/* serve static files but disable default index.html */

app.use(express.static("public", { index: false }));

/* DEFAULT ROUTE (login page first) */

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
});

/* REGISTER API */

app.post("/register", async (req,res)=>{

const {name,email,password} = req.body;

if(!name || !email || !password){

return res.status(400).json({
message:"All fields are required"
});

}

const hashed = await bcrypt.hash(password,10);

try{

await pool.query(
"INSERT INTO users(name,email,password) VALUES($1,$2,$3)",
[name,email,hashed]
);

res.json({message:"User Registered"});

}catch(err){

res.status(400).json({
message:"Email already exists"
});

}

});

/* LOGIN API */

app.post("/login", async (req,res)=>{

const {email,password} = req.body;

const user = await pool.query(
"SELECT * FROM users WHERE email=$1",
[email]
);

if(user.rows.length === 0){

return res.status(400).json({message:"User not found"});

}

const valid = await bcrypt.compare(password,user.rows[0].password);

if(!valid){

return res.status(400).json({message:"Invalid password"});

}

res.json({
message:"Login successful",
user:user.rows[0]
});

});

/* GET PRODUCTS */

app.get("/products", async (req,res)=>{

const result = await pool.query("SELECT * FROM products");

res.json(result.rows);

});

/* CREATE ORDER */

app.post("/order", async (req,res)=>{

const {name,phone,address,cart,payment_method} = req.body;

const total = cart.reduce((sum,item)=>sum + item.price*item.quantity,0);

const payment_status = payment_method==="COD" ? "Pending" : "Success";

const order = await pool.query(

`INSERT INTO orders(user_name,phone,address,total_amount,payment_method,payment_status,order_status)
VALUES($1,$2,$3,$4,$5,$6,'Confirmed') RETURNING id`,

[name,phone,address,total,payment_method,payment_status]

);

const orderId = order.rows[0].id;

for(let item of cart){

await pool.query(

`INSERT INTO order_items(order_id,product_id,quantity,price)
VALUES($1,$2,$3,$4)`,

[orderId,item.id,item.quantity,item.price]

);

}

res.json({orderId});

});

/* GET ORDERS */

app.get("/orders", async (req,res)=>{

const result = await pool.query(

`SELECT orders.id,products.name,products.image_url,
order_items.quantity,order_items.price,
orders.payment_status
FROM orders
JOIN order_items ON orders.id=order_items.order_id
JOIN products ON products.id=order_items.product_id
ORDER BY orders.id DESC`

);

res.json(result.rows);

});

/* START SERVER */

app.listen(3000,()=>{
console.log("Server running on http://localhost:3000");
});