const UserSession = require("../models/userSession");

module.exports = {
  Verify: function(req, res, next) {
    //verify token, make sure its not deleted
    let { body } = req;

    const {} = body;

    // console.log("please work", body);

    UserSession.find(
      {
        _id: body.query,
        isDeleted: false
      },
      (err, sessions) => {
        if (err) {
          return res.send({
            success: false,
            message: "Verification error"
          });
        }

        if (sessions.length != 1) {
          return res.send({
            success: false,
            message: "server error in verification"
          });
        } else {
          return res.send({
            success: true,
            message: "Verification is good",
            data1: sessions
          });
        }
      }
    );
  }
};
