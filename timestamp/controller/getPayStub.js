const payStub = require ('../models/profile');


//Used to get paystubs from database

module.exports = {
    getPayStub: function(req, res) {
        const {body} = req;
    //enter the data we want into the body
    const {
        fullName,
        title,
        hoursWorked,
        payRate,
        payOut,
        date,
    } = body;
 


 payStub.aggregate([
     {$match:{}},
     {$group: {_id:"$payCheck"}},
 ], (err,stub) => {
     if (err){
              return res.send({
                  success: false,
                  message: "server error"
              });
          }
    
        // return res.send({
        //     success: true,
        //     message: 'User payCheck',
        //     token: stub._id  //this is the unique user id in mongodb
        //                           //the database idenitfys a user based off this token
        //                           //it can also be used to delete the user
        // })
        console.log(JSON.stringify(stub)); //data is shown in the terminal
              

 }) 
}
}