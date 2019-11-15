var router = require('express').Router();
const Verify = require('../../controller/userVerify');

router.route('/verify')
    .get(Verify.Verify)


module.exports = router

