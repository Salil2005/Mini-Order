# Mini Order & Payment System 

A full-stack web application that simulates the basic workflow of an **online gaming store**.  
Users can browse games, add them to cart, place orders, and complete payments using **Cash on Delivery or Mock Online Payment**.

The project demonstrates **frontend + backend integration**, **database relationships**, and **basic authentication**.

---

# Tech Stack

Frontend
- HTML
- CSS
- JavaScript

Backend
- Node.js

Database
- PostgreSQL

Libraries
- bcrypt (password hashing)
- cors
- pg

---

# Features

### Authentication
- User Registration
- User Login
- Password hashing using bcrypt

### Product System
- Display list of games
- Product images
- Add to Cart functionality

### Cart Management
- Increase quantity
- Decrease quantity
- Remove product
- Automatic total price update

### Checkout System
- Enter delivery details
- Choose payment method

### Payment System
- Cash on Delivery
- Mock Online Payment Gateway
- Payment success page
- Payment failure page

### Orders
- Save order in database
- View order history

---

# Project Structure


```
MINI ORDER
│
├── server.js
├── db.js
├── package.json
├── .gitignore
│
├── public
│ ├── index.html
│ ├── login.html
│ ├── register.html
│ ├── cart.html
│ ├── checkout.html
│ ├── payment.html
│ ├── success.html
│ ├── failed.html
│ ├── orders.html
│
│ ├── css
│ │ └── style.css
│
│ ├── js
│ │ ├── products.js
│ │ ├── cart.js
│ │ ├── checkout.js
│ │ ├── login.js
│ │ ├── register.js
│ │ └── orders.js
│
│ └── images

```
# Application Flow

1. User registers or logs in
2. Browse gaming products
3. Add products to cart
4. Modify cart quantities
5. Proceed to checkout
6. Choose payment method
7. Order stored in database
8. Success or failure page displayed

---

# Future Improvements

- Admin dashboard
- Product management
- Real payment gateway integration
- User order tracking
- Deployment 
