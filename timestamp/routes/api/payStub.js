var router = require('express').Router();
const payStub = require('../../controller/userPayStub');

router.route('/paystub')
    .post(payStub.payStub)

module.exports = router