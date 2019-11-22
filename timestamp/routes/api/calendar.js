var router = require('express').Router();
const calendar = require('../../controller/userCalendar');

router.route('/calendar')
.get(calendar.calendar)

module.exports = router; 
