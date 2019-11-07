const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    default: ""
  },

  lastName: {
    type: String,
    default: ""
  },

  email: {
    type: String,
    default: ""
  },

  password: {
    type: String,
    default: ""

  },

  inCome: {
    type: String,
    default: ""
  }

  







 
});



module.exports = mongoose.model("User", UserSchema);
