<h1 align="center">  🛒 &nbsp; Shopping App 🛒 </h1>

> Online Marketplace Built with MERN stack (MongoDB, Express, React and Node).



### <h2 align="center"> ⚡️⚡️⚡️ &nbsp; [Kiwi Shop](https://kiwi-shop.herokuapp.com/) ⚡️⚡️⚡️ </h2>

## 📜 &nbsp; Table of contents

- [Main Features](#--main-features)
- [Technologies](#--technologies)
- [Key Concepts](#--key-concepts)
- [Setup](#--setup)
- [ENV](#-ENV)

## 🚩 &nbsp; Main Features

> This App was made to track the order state since the customer place it
> once it's shipped the seller mark it as shipped, and then the shipper mark it as delivered.

#### Project methodology

- **Register and signin system**
  - Everyone is registered as a customer.
  - Customers can apply to be sellers. 
  - Shipper only created by the Admin.
  - Admins can create any other admins.
- **Product life cycle**
  - A seller add a product.
  - A customer order some products, number in stock decreases.
  - The customer tracks the order's state since it's placed. 
  - Depends on the address the customer provided, the area shipper get notification.
  - The product's seller get a notification about the order. 
  - The shipper pick the product, the seller mark it as shipped.
  - The shipper deliver the order, and mark it as delivered.
  - The customer may want to turn it back (to be done).
- **Other facilities**
  - Users can edit their account info. 
  - Users can track their order's state. 
  - Users can add, delete or edit addresses. 
  - Users can have a wishlist with any amount of products. 

#### Users roles - 

- **Customer**
  - Sign up & login.
  - Switch the account to seller.
  - Purchase order of any amount of products.
  - Tracking order state. 
  - Return order (To do).
- **Seller** -> all above plus.
  - Add and edit his own products.
  - Receive notifications of the new orders the customer make (only his products).
  - Mark the orders the customers make as shipped when the Shipper takes it.
- **Shipper** -> all above plus
  - Receive notifications of orders (According to the customer address provided).
  - Ship orders to the customer's address and mark the order as Delivered.
- **Admin** -> all above plus
  - Add, Edit and Delete categories.
  - Add, Edit and Delete any products.
  - Create other Admins.
  - Create Shippers and add Shipper area he will be responsible for.
  - Restrict any user from all the permissions.

## 💹 &nbsp; Technologies

> Project is created with:

#### Backend

- Express
- Mongoose
- Json Web Token (For authentication)
- bcryptjs (for data encryption)

#### Frontend

- React JS
- Redux (Manage app state)
- React-router (To handle routing)
- Axios (For http requests)
- React Bootstrap
- React-toastify (To handle success and error messages)
- Formik (To handle forms state and validation)
- Yup (To handle client side form validation)
- Sass

## 💡 &nbsp; Key Concepts

- MVC (Model-View-Controller)
- CRUD operations
- Authentication system
- Encrypting passwords
- Images handling using multer
- OOP (Object Oriented Programming)



## 💻 &nbsp; Setup

To run this project, install it locally using npm:

```
$ cd inventory-application
$ npm install (install backend dependencies)
$ cd views
$ npm install (install frontend dependencies)
$ cd ..
$ npm run server (for Node server side development)
$ npm run client (for React client side development)
$ npm run dev (for both client and server side)
```
## &nbsp; ENV
- PORT=
- DB_URI=
- JWT_SECRET=
- CLOUDINARY_CLOUD_NAME=
- CLOUDINARY_API_KEY=
- CLOUDINARY_API_ESCRET=


# Author

👤 &nbsp; **Adeyemi Tomiwa**

- Twitter: [@hackcat_29](https://twitter.com/hackcat_29)
- Github: [@UncleTom29](https://github.com/UncleTom29)
- Email: [adeyemitomiwa7@gmail.com](mailto:adeyemitomiwa7@gmail.com)

## 📝 &nbsp; License

- This project is [MIT](./LICENSE) licensed.
