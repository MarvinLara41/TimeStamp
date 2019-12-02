const mongoose = require('mongoose');
 
const InsuranceSessionSchema = new mongoose.Schema({
      firstName:String,
      lastName:String,
      email:String,
      insuranceName:String,   
      dependencies:String,
      insuranceId:Number,
      phoneNumber:Number
});

const insurance = mongoose.model('InsuranceSession', InsuranceSessionSchema);
module.exports = insurance;