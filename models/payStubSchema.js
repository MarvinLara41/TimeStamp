const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const payStubSchema = new Schema({
    fullName:String,
    title:String,
    email:String,
    hoursWorked:Number,
    payRate:Number,
    payOut:Number,
    date: String
});

const payStub = mongoose.model('PayStub', payStubSchema);
module.exports = payStub;