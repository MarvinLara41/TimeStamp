const mongoose = require('mongoose');

const ClockOutSchema = new mongoose.Schema({
  fullName: {
      type: String,
      default: ''
  },
  clockOut: {
      type: Date,
      default: Date.now()
  }
});

const clockOut = mongoose.model('ClockOut', ClockOutSchema);
module.exports = clockOut;