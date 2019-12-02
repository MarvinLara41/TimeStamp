const user = require("../models/user");

module.exports = {
  getAll_user: function(req, res) {
    let { body } = req;

    const { token_1 } = body;

    const token2 = body.token_1;

    // console.log("body", token2);

    user
      .find({ _id: token2 })
      .then(function(data) {
        res.send(data);

        // console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
