const express = require('express');
const Auth = require('../middleware/Auth.js');
const Responses = require('../controller/Responses.js');
var router = express.Router()

/* router.post('/save', Auth.verifyToken, Responses.save);
 */router.post('/save',  Responses.save);

router.post('/get-by-id', Responses.getOne);

router.post('/get-list', Responses.getAll);
router.post('/get-list-unauth', Responses.getAllresp);
router.post('/delete-by-id', Responses.delete);

router.post('/update', Auth.verifyToken, Responses.update);


module.export = router;