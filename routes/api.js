const express = require('express');
const authentication = require('../app/controllers/authentication');
const service = require('../app/controllers/service');
const { welcome } = require('../app/controllers/welcome');
const adminAuthMiddleware = require('../app/middleware/adminAuthMiddleware');
const userAuthMiddleware = require('../app/middleware/userAuthMiddleware');
const router = express.Router();

router.get("/", welcome)
router.post("/createAccount", authentication.createUserAccount) // create new user
router.post("/login", authentication.login) //  user login
router.get("/user/profile", userAuthMiddleware, authentication.getUserProfile) //  user profile
router.post("/user/updateProfile", userAuthMiddleware, service.updateUserProfile) //  user profile


router.post("/addNewProduct", userAuthMiddleware, adminAuthMiddleware, service.addNewProduct) // new product
router.post("/product/update", userAuthMiddleware, adminAuthMiddleware, service.updateProduct) //  update product
module.exports = router;