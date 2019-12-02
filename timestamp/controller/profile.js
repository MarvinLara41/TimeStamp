const mongoose = require('mongoose');
const Profile = require('../models/profile');

//Used for adding a profile to the database

module.exports = {
    Profile: function(req, res) {
        let {body} =req;
            let {
                password,
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

           

            
            
            var profile = new Profile ({ 

            userInfo: [{firstName, lastName, email, password}],

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
