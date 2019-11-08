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

module.exports = mongoose.model('ClockOut', ClockOutSchema);
