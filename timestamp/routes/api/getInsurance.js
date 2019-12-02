var router = require('express').Router();
const insurance= require('../../controller/getInsurance');

router.route('/getInsurance')
    .get(insurance.getInsurance);

module.exports = router
