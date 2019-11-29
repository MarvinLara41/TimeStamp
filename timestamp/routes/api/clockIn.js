var router = require("express").Router();
const clockIn = require("../../controller/userClockIn");

router
  .route("/clockin")
  .post(clockIn.clock_In)
  .get(clockIn.getClock_In);

module.exports = router;
