const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const payStubSchema = new Schema({
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

const payStub = mongoose.model('PayStub', payStubSchema);
module.exports = payStub;



