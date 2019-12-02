var router = require('express').Router();
const user= require('../../controller/getUserInfo');

router.route('/getUser')
    .get(user.getUserInfo)

module.exports = router