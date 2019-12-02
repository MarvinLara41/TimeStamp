const insurance = require ('../models/profile');


//Used to get insurances from database

module.exports = {
    getInsurance: function(req, res) {
        const {body} = req;
    //enter the data we want into the body
    const {
       firstName, 
       lastName, 
       email,
       insuranceName, 
       dependencies, 
       insuranceId, 
       phoneNumber
    } = body;
 


 insurance.aggregate([
     {$match:{}},
     {$group: {_id:"$insurance"}},
 ], (err,show) => {
     if (err){
              return res.send({
                  success: false,
                  message: "server error"
              });
          }

    // return res.send({
    //             success: true,
    //             message: 'User insurance',
    //             token: show._id,//this is the unique user id in mongodb
    //                               //the database idenitfys a user based off this token
    //                               //it can also be used to delete the user
    // })
        console.log(JSON.stringify(show)); //if using postman the return will be rendered in terminal
 }) 
}
}