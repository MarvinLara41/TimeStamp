const mongoose = require('mongoose'); 
// const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
//this file is for the creation of the user on the database.

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
    
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false,
    
  }
});

//hasing password returning a hashed password
// UserSchema.methods.generateHash = function(password){
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// }


// //
// UserSchema.methods.validPassword = function(password){
//     return bcrypt.compareSync(password, this.password);
// }



const user = mongoose.model('User', UserSchema);
module.exports = user;
