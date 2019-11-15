const User = require('../models/user');
const UserSession = require('../models/userSession');



module.exports = {
    sign_In: function(req, res) {
//Sign up post request can be checked with postman using the post "/api/account/signup"
      //everything under this post request is connected to userSession.js
      const {body} = req;
      const {
          password
      }= body;
  
      let {
          email
      }= body;
  
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
            
      email = email.toLowerCase();
  
      //finding if the user is valid
      User.find({
          email: email
      }, (err, users) =>{
          if (err){
              return res.send({
                  success: false,
                  message: "server error"
              });
          }
  
          if (users.length !=1){
              return res.send({
                  success: false,
                  message: "Invalid"
              });
          }
          //user is local to this function
          const user = users[0];
          if (!user.validPassword(password)){
              return res.send({
                  success: false,
                  message: "Invalid password"
              });
          }
  
          //if user information is correct this will run
          //data is taken from userSession.js file
          const userSession = new UserSession();
  
          userSession.userId = user._id;
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