# EHkit.com Server
<a href="https://ehkit.netlify.app/" target="__blank" title="EHKit.com">
  <img src="https://i.ibb.co/2F9fVHJ/EHkit.png" alt="EHkit.com home page" />
</a>


### Description
Ehkit.com website has daily household products. Such as furniture, kitchenware, automobile parts, and building materials. Users can order their daily required products. This website has user authorization. There are two types of users like normal users and admins. Normal users can order any product by logging into the website. After the admin controls the website. Admin website after viewing any product add update delete end. All users can add an order list, delete, or change status.

### Features

- Dynamic Slider Banner
- Firebase AuthenticaTion and Custom user AuthenticaTion
- use JsonWebToken (jwt)
- Use userAuthMiddleware and AdminAuthMiddleware
- Use Custom Error handler and status code
- Create user login session
- Custom User Profile
- Add new product api, Update product information, get product by token, get all product API
- Product Query By Furniture and Category
- User Order API, get All order by user Token, Admin get All order
- Get User List by admin, get user profile by token


<!-- 
<a href="https://www.youtube.com/watch?v=3OMj6nqDuAA" title="Hope UI" target="__blank">
  <img src="https://assets.iqonic.design/hope-ui/github/hope-ui-youtube.png" alt="Hope UI Video" />
</a> -->
## Tech Stack

**Back-End:** 
- Node.js
- Express

**Database:** 
- MongoDB
- Mongoose.

**NPM Package:**
- jsonwebtoken
- cros
- dotenv
- md5
- multer
- nodemon

# Table of Contents

  - [Quick Start](#quick-start)
  - [Quick Start](#Using-API)
  - [File Structure](#file-structure)
  - [Browser Support](#browser-support)
  - [Follow Us](#follow-us)
  - [Licensing](#licensing)

## Quick Start

You can use following method to get started with React Application of the EHKit system.

### Part 1: Direct Download
[Dowload from Github](https://github.com/abudaudhossain/EHKit.com_server/archive/refs/heads/main.zip)

### Part 2: Using NPM
Start working with the EHKit system
1. Clone Git Repo
```
git clone abudaudhossain/EHKit.com_server
```
2. Install Dependency
```
npm install
```

3. Run on development 
```
npm start
```

## Using API

1. Impotent Variable 
```
const baseUrl = "https://ehkit.herokuapp.com";
or
const baseUrl = "http://localhost:5000";

const adminJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVG9rZW4iOiIxOTczM0lJbnJUVXNlclByb1RHbXBsMjQwMTciLCJzZXNzaW9uVG9rZW4iOiI2MjExMmFwRWZCVXNlclNlc3Npb25IVEZuYzg4MDEzIiwiaWF0IjoxNjYwNjQxMTEzfQ.oqkCJPXD5JQYSYOwkduKMJCijYjGQVAig9cSjIApSYM";
const userJWT = "";

```

1. Create New UserProfile:

```
  const userAccount = {
  "name": "User Name",
  "email": "user email",
  "rule": "user"
}
  axios.post(`${baseUrl}/createAccount`, userAccount)
    .then(function (response) {
      console.lot(response)
      })
    .catch(function (error) {
      console.log(error)
      });

```


2. User Login By Email:

```
  axios.post(`${baseUrl}/login`, { email: email })
    .then(function (response) {
      console.lot(response)
      })
    .catch(function (error) {
      console.log(error)
      });

```

2. Update user Profile:

```
  axios.post(`${baseUrl}/user/updateProfile`, userProfileData, {
      headers: {
        'authorization': `Bearer ${userJWT}`
      }
    })
    .then(function (response) {
      console.lot(response)
      })
    .catch(function (error) {
      console.log(error)
      });

```

## EHKit Server API List : 
```
 1. Add new product api: https://ehkit.herokuapp.com/addNewProduct
 2. Product update api: https://ehkit.herokuapp.com/product/update
 3. Get Product by Token api: https://ehkit.herokuapp.com/product/:producttoken
 4. Get All product api: https://ehkit.herokuapp.com/allProduct

```

## File Structure
Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:
```
github/hope-ui-admin-dashboard/

EHKIT_SERVER
  ├── App
  │    ├── controllers
  │    │    ├── authentication.js
  │    │    ├── service.js
  │    │    └── welcome.js
  │    ├── exceptions
  │    │    ├── handlers.js
  │    │    ├── NotAcceptableError.js
  │    │    ├── NotFountError.js
  │    │    ├── UnauthorizedError.js
  │    │    └── ValidationError.js
  │    ├── helpers
  │    │    ├── validation
  │    │    │    └──helper.js    
  │    │    ├── nativeResponse.js
  │    │    └── utils.js
  │    ├── middleware  
  │    │    ├── adminAuthMiddleware.js
  │    │    └── userAuthMiddleware.js
  │    ├── models  
  │    │    ├── authSession.js
  │    │    ├── category.js
  │    │    ├── features.js
  │    │    ├── orders.js
  │    │    ├── products.js
  │    │    └── userProfile.js
  │    ├── services  
  │    │    └── createAuthSession.js
  ├── routes
  │    └── api.js
  ├── .env
  ├── .gitignore
  ├── index.js
  ├── package-lock.json
  ├── package.json
  └── README.md
```
## Browser Support
![chrome](https://assets.iqonic.design/hope-ui/github/chrome.png)
![Firefox](https://assets.iqonic.design/hope-ui/github/Firefox.png)
![Safari](https://assets.iqonic.design/hope-ui/github/Safari.png)
![Microsoft](https://assets.iqonic.design/hope-ui/github/Microsoft%20edge.png)
![Operamini](https://assets.iqonic.design/hope-ui/github/Operamini.png)

## Follow Us
- [Twitter](https://twitter.com/webexpert24abu)
- [Facebook](https://www.facebook.com/abudaud.dev/)
- [LinkedIn](https://www.linkedin.com/in/abudauddev/)
- [Instagram](https://www.instagram.com/abudauddev/)

## Licensing
- Code and Documentation Copyright 2022 All Rights Reserved by [Abu Daud Hossain](https://github.com/abudaudhossain) Development.