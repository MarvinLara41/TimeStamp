const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
//this file is for the creation of the user on the database.
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
  isDeleted: {
    type: Boolean,
    default: false
  },

  clock_2: [
    {
      type: Schema.Types.ObjectId,
      ref: "clock"
    }
  ]
});

// hasing password returning a hashed password
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const user = mongoose.model("user", UserSchema);

module.exports = user;
