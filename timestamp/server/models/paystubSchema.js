const mongoose = require('mongoose');

const payStubSchema = new mongoose.Schema({
    fullName: {
        type: String,
        default: ''
    },
    title: {
    type: String,
    default: ''
    },
    hoursWorked: {
        type: Number,
        default: ''
    },
    payRate: {
        type: Number,
        default: ''
    },
    payOut: {
        type: Number,
        default: ''
    },
    date: {
      type: Date,
      default: Date.now()
  }
});

module.exports = mongoose.model('PayStub', payStubSchema);