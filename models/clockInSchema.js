const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clockSchema = new Schema({
  punchIn: String,

  punchOut: String,

  lunch: String,

  break: String,

  date: { type: Date, default: Date.now },

  clocks_1: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
});

const addClock = mongoose.model("clock", clockSchema);

module.exports = addClock;
