const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');

//this file is for the creation of the user on the database.

const UserSchema = new mongoose.Schema({
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
  password: {
    type: String,
    default: '',
  },
  isDeleted: {
    type: Boolean,
    default: false,
    
  }
});

//hasing password returning a hashed password
UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}


//
UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}



const user = mongoose.model('User', UserSchema);
module.exports = user;
