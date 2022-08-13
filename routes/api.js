const express = require('express');
const authentication = require('../app/controllers/authentication');
const { welcome } = require('../app/controllers/welcome');
const router = express.Router();

router.get("/", welcome)
router.post("/createAccount", authentication.createUserAccount) // create new user
router.post("/login", authentication.login) //  user login

module.exports = router;