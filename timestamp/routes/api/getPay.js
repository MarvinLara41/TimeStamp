var router = require('express').Router();
const pay= require('../../controller/getPayStub');

router.route('/getPay')
    .get(pay.getPayStub)

module.exports = router
