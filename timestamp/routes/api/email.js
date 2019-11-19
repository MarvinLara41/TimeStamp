var router = require('express').Router();
const email = require('../../controller/emailer')

router.route('/email')
        .post(email.sendEmail);
module.exports = router
