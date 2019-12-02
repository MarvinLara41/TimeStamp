const meetings = require("../models/meetingSchema");

//@marvin "robert" made some changes its working now

module.exports = {
  Me_etings: function(req, res) {
    const { body } = req;

    let { user_1 } = body;

    let { user_2 } = body;

    let { event_s } = body;

    let { event_date } = body;

    console.log(body);

    const meeting = new meetings({
      user1: user_1,
      user2: user_2,
      event: event_s,
      event_date: event_date
    });

    meeting.save((err, user1, user2) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error"
        });
      }
      return res.send({
        success: true,
        message: "Meeting has been set",
        meeting: meeting
      });
    });
  },

  getMe_etings: function(req, res) {
    meetings.find().then(data => {
      console.log(data);
      res.send(data);
    });
  }
};
