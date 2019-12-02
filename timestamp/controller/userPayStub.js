const payStub = require ('../models/payStubSchema'); 

//Used to create payStub and send to database
module.exports = {
    payStub: function(req, res) {
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
 
    payStub.find({
        fullName: fullName
    }, (err, stub) => {
        if (err){
              return res.send({
                  success: false,
                  message: "server error"
              });
          }
  
          if (stub.length == 1){
              return res.send({
                  success: false,
                  message: "This employee already has their paystub uploaded."
              });
          }

          //saving employee paystub information
        const pay = new payStub();
 
        pay.fullName= fullName;
        pay.title=title;
        pay.hoursWorked=hoursWorked;
        pay.payRate=payRate;
        pay.payOut=payOut;
        pay.date=date;
     
        pay.save((err,user) => {
        if (err){
            return res.send({
                success: false,
                message: 'Error'
            });
        }
        return res.send({
            success: true,
            message: 'Employee paystub has been added',
            token: user._id
        });
        });
    })
    
 }
}