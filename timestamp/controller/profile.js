const mongoose = require('mongoose');
const Profile = require('../models/profile');



module.exports = {
    Profile: function(req, res) {
        let {body} =req;
            let {
                email,
                lastName,
                firstName,
                isDeleted,
                title,
                fullName,
                hoursWorked,
                payRate,
                payOut,
                date,
                insuranceName,
                dependencies,
                insuranceId,
                phoneNumber,
            }=body;

            //adding error incase an email is repeated on the database. 
            // Profile.find({
            //     email: email
            // },(err, previousUser)=>{
            // if(err){
            // return res.send({
            //     success: false, 
            //     message: 'Error: must fill in password'
            // });
            //  }else if (previousUser.length > 0){
            // return res.send({
            //     success: false, 
            //     message: 'Error: user already exists'
            // });
            // }


            
            
            var profile = new Profile ({ 

            // userInfo: [{firstName, lastName, email, password}],

            insurance:[{firstName, lastName, email,insuranceName, dependencies, insuranceId, phoneNumber}],

            payCheck: [{ fullName, title, email, hoursWorked, payRate, payOut, date}]
            })
            
            
             profile.save((err,doc) => {
              if (err){
                  return res.send({
                  success: false, 
                  message: 'Server error'
              });
              }
  
              return res.send({
                  success: true,
                  message: 'Profile has been added to database',
                  token: doc._id  //this is the unique  user id in mongodb
                                  //the database idenitfys a user based off this token
                                  //it can also be used to delete the user
            })

            })   
    }
}
