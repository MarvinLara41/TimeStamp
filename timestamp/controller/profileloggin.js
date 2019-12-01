const mongoose = require('mongoose');
const Profile = require('../models/profile');


module.exports = {
    logginProfile: function(req, res) {
        let {body} =req;
        const{password}=body;
        let{email}=body;

         //if error checks if information is incorrect
      if (!email){
          return res.send({
              success: false, 
              message: 'EMAIL CAN NOT BE BLANK'
          });
      }
      if (!password){
          return res.send({
              success: false, 
              message: 'PASSWORD CAN NOT BE BLANK'
          });
      }

      Profile.find({
          email
      }, (err, users)=>{
           if (err){
              return res.send({
                  success: false,
                  message: "server error"
              });
          }
  
          if (users.length !=1){
              return res.send({
                  success: false,
                  message: "Invalid email or password"
              });
          }

          const user = users[0];

          const loggin = new Profile();

          loggin.userId = user._id;
           userSession.save((err,doc) => {
              if (err){
                  return res.send({
                  success: false, 
                  message: 'Server error'
              });
              }
  
              return res.send({
                  success: true,
                  message: 'Valid sign in',
                  token: doc._id  //this is the unique user id in mongodb
                                  //the database idenitfys a user based off this token
                                  //it can also be used to delete the user
              })
      });
    });
}
}