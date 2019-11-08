const mongoose = require('mongoose');

const clockInSchema = new mongoose.Schema({
  fullName: {
      type: String,
      default: ''
  },
  clockIn: {
      type: Date,
      default: Date.now()
  }
});

module.exports = mongoose.model('ClockIn', clockInSchema);
