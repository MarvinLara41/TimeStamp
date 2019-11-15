const mongoose = require('mongoose');
 
const InsuranceSessionSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: '',
        
      },
      lastName: {
        type: String,
        default: '',
      },
      email: {
        type: String,
        default: '',
      },
      insuranceName: {
          type: String,
          default: ''
      },
      dependencies: {
          type: String,
          default: ''
      },
      insuranceId: {
          type: Number,
          default: ''
      },
      phoneNumber:{
          type: Number,
          default: ''
      }
});

const insurance = mongoose.model('InsuranceSession', InsuranceSessionSchema);
module.exports = insurance;