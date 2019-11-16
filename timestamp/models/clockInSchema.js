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

const clockIn = mongoose.model('ClockIn', clockInSchema);

module.exports= clockIn;