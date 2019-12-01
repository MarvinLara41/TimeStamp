var router = require('express').Router();
const loggin = require('../../controller/profileloggin');


router.route('/loggin')
    .post(loggin.logginProfile)


module.exports = router