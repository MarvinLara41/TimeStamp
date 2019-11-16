var router = require('express').Router();
const payStub = require('../../controller/userPayStub');

router.route('/paystub')
    .post(payStub.pay_Stub)

module.exports = router