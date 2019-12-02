var router = require("express").Router();
const meeting = require("../../controller/userMeeting");

router
  .route("/meeting")
  .get(meeting.getMe_etings)
  .post(meeting.Me_etings);

module.exports = router;
