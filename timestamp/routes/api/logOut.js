var router = require('express').Router();
const logOut = require('../../controller/userLogOut');

router.route('/logOut')
    .get(logOut.log_Out)


module.exports = router