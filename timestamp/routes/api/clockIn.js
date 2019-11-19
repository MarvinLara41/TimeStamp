var router = require('express').Router();
const clockIn= require('../../controller/userClockIn');

router.route('/clockin')
    .post(clockIn.clock_In);
   


module.exports = router;