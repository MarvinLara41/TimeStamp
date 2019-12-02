const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  firstName:String,
  lastName:String,
  email:String,
   userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const payStubSchema = new Schema({
    fullName:String,
    title:String,
    email:String,
    hoursWorked:Number,
    payRate:Number,
    payOut:Number,
    date: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

 
const InsuranceSessionSchema = new Schema({
      firstName:String,
      lastName:String,
      email:String,
      insuranceName:String,   
      dependencies:String,
      insuranceId:Number,
      phoneNumber:Number,
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});



const ProfileSchema = new mongoose.Schema({
    insurance: [InsuranceSessionSchema],
    payCheck: [payStubSchema],
    userInfo: [UserSchema]
});


//hasing password returning a hashed password
// UserSchema.methods.generateHash = function(password){
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// }


// //
// UserSchema.methods.validPassword = function(password){
//     return bcrypt.compareSync(password, this.password);
// }


const Profile = mongoose.model('UserProfile', ProfileSchema);

module.exports = Profile;