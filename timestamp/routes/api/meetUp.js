var router = require('express').Router();
const meetUp = require('../../controller/userMeetup')

router.route('/meetup')
        .post(meetUp.meetUp);
module.exports = router

 
  