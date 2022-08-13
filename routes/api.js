const express = require('express');
const { welcome } = require('../app/controllers/welcome');
const router = express.Router();

router.get("/", welcome)

module.exports = router;