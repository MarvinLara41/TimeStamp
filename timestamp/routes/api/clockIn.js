var router = require("express").Router();

const clockIn = require("../../controller/userClockIn");

router
  .route("/clockin")
  .put(clockIn.getClock_In)
  .post(clockIn.clock_In);

module.exports = router;
