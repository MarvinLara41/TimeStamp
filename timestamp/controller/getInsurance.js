const insurance = require ('../models/profile');
// const insurance = require ('../models/insuranceSchema')


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
 
    const insurance = new insurance();
    insurance.firstName = firstName;
    insurance.lastName = lastName;
    insurance.email = email;
    insurance.insuranceName = insuranceName;
    insurance.dependencies = dependencies;
    insurance.insuranceId = insuranceId;
    insurance.phoneNumber = phoneNumber;


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

          function (req, res) {
              insurance.find().then(data => {
                  console.log(data);
                  res.send(data);
              })
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
};