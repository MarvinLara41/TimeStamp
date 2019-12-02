var router = require('express').Router();
const Verify = require('../../controller/userVerify');

router.route('/verify')
    .post(Verify.Verify)


module.exports = router

