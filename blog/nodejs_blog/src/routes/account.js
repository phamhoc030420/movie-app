const express = require('express');
const router = express.Router();
const acountController = require('../app/controllers/AccountController');
router.get('/', acountController.index);
router.post('/register', acountController.register);
module.exports = router;
