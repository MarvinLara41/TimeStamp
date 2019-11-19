var router = require('express').Router();
const meeting= require('../../controller/userMeeting');

router.route('/meeting')
    .post(meeting.Me_etings)


module.exports = router;
