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

        console.log(JSON.stringify(stub));
              

 }) 
}
}