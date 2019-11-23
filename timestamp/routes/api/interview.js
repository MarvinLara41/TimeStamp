var router = require('express').Router();
const interview = require('../../controller/userInterview')

router.route('/interview')
        .post(interview.interview);
module.exports = router

 
  