const user = require("../models/user");
const addClock = require("../models/clockInSchema");

module.exports = {
  clock_In: async (req, res, next) => {
    //creates a new clocks
    const new_clock = new addClock(req.body);

    // // get users by their id from the front end
    const user_1 = await user.findById(req.body.userId);

    // // assign user as a user
    new_clock.clocks_1 = user_1;

    // // // save the clocks
    await new_clock.save();

    // //add clocks to the user's clocks array "clocks"
    user_1.clock_2.push(new_clock);

    // // save the user
    await user_1.save();

    res.status(201).json(user_1);
  },

  // get request for nested collection in the users collection

  getClock_In: async (req, res, next) => {
    console.log(req.body);

    // res.send(req.body);
    // const userId = "5dd9817b9d42f676dcef0841";

    const user_1 = await user.findById(req.body.userId1).populate("clock_2");

    const data1 = await user_1;

    res.status(201).json(data1.clock_2);
  }
};
