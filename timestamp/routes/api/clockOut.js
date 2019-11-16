const clockOut = require('../../controller/userClockOut');
var router = require('express').Router();

router.route('/clockout')
    .post(clockOut.clock_Out)

module.exports = router;