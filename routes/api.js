const express = require('express');
const authentication = require('../app/controllers/authentication');
const service = require('../app/controllers/service');
const { welcome } = require('../app/controllers/welcome');
const userAuthMiddleware = require('../app/middleware/userAuthMiddleware');
const router = express.Router();

router.get("/", welcome)
router.post("/createAccount", authentication.createUserAccount) // create new user
router.post("/login", authentication.login) //  user login
router.get("/user/profile",userAuthMiddleware ,authentication.getUserProfile) //  user profile
router.post("/user/updateProfile",userAuthMiddleware ,service.updateUserProfile) //  user profile

module.exports = router;