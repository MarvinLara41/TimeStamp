const mongoose = require('mongoose');

const clockInSchema = new mongoose.Schema({
  fullName: {
      type: String,
      default: ''
  },
  clockIn: {
      type: String,
      default: ""
  }
});

const clockIn = mongoose.model('ClockIn', clockInSchema);

module.exports= clockIn;