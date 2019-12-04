const mongoose = require('mongoose');

const sendMailSchema = new mongoose.Schema({
  userId: {
      type: String,
      default: ''
  },
  subject: {
      type: String,
      default: Date.now()
  },
  email:{
      type: String,
      default: ''
  },
  message:{
      type: String,
      default: ''
  },
});

const sendMail = mongoose.model('sendMail', sendMailSchema);
module.exports = sendMail;