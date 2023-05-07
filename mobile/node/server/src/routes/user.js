const express = require('express');
const Auth = require('../middleware/Auth.js');
const User = require('../controller/User.js');
var router = express.Router()

router.post('/register', User.register);
router.post('/login', User.login);
router.post('/check-user', User.checkUser);
router.post('/get-list-unauth', User.getAll);
router.post('/delete-by-id', User.delete);

router.post('/update-photo', Auth.verifyToken, User.updatePhoto);
router.post('/delete', Auth.verifyToken, User.delete);

module.export = router;
