var router = require('express').Router();
const insurance = require('../../controller/userInsurance');

router.route('/insurance')
    .post(insurance.in_Surance)


module.exports = router;