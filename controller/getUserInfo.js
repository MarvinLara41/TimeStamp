const userInfo = require ('../models/profile');


//Used to get paystubs from database

module.exports = {
    getUserInfo: function(req, res) {
        const {body} = req;
    //enter the data we want into the body
    const {
        firstName,
        lastName,
        email
    } = body;
 


 userInfo.aggregate([
     {$match:{}},
     {$group: {_id:"$userInfo"}},
 ], (err,user) => {
     if (err){
              return res.send({
                  success: false,
                  message: "server error"
              });
          }

    
    // return res.send({
    //     success: true,
    //     message: 'Valid sign in',
    //     token: user._id  //this is the unique user id in mongodb
    //                               //the database idenitfys a user based off this token
    //                               //it can also be used to delete the user
    // })
        console.log(JSON.stringify(user)); 
              

 }) 
}
}