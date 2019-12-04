var router = require('express').Router();
const user= require('../../controller/profile');

router.route('/profile')
    .post(user.Profile)


module.exports = router
