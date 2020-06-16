var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
    return res.render('index');
});

module.exports = router;