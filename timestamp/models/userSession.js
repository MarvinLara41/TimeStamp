const mongoose = require('mongoose');

const UserSessionSchema = new mongoose.Schema({
  userId: {
      type: String,
      default: ''
  },
  timeStamp: {
      type: Date,
      default: Date.now()
  },
  isDeleted:{
      type: Boolean,
      default: false
  }
});

const UserSession = mongoose.model('UserSession', UserSessionSchema);
module.exports = UserSession;