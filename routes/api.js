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

router.get("/users/list", userAuthMiddleware, adminAuthMiddleware, service.getAllUsers) //  user profile


router.post("/addNewProduct", userAuthMiddleware, adminAuthMiddleware, service.addNewProduct) // new product
router.post("/product/update", userAuthMiddleware, adminAuthMiddleware, service.updateProduct) //  update product
router.get("/product/:token", service.getProductByToken) //  get product by token
router.get("/allProduct", service.getAllProduct) //  get all products

router.post('/create/feature', userAuthMiddleware, adminAuthMiddleware, service.addNewFeature) // add new feature
router.get('/features', service.getFeatures) // get all feature

router.post('/create/category', userAuthMiddleware, adminAuthMiddleware, service.addCategory) // add new category
router.get("/category/:featureToken", service.getCategoryByFeatures) // get category by feature token
router.get("/categories", service.getAllCategories) // get all categories

module.exports = router;