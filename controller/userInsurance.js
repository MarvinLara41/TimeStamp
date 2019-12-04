const insuranceSchema = require ('../models/insuranceSchema');


module.exports = {
    in_Surance: function(req, res) {
        const {body} = req;

    const {
        firstName,
        lastName,
        insuranceName,
        dependencies,
        insuranceId,
        phoneNumber
    } = body;

    let {
        email
    } = body;
    

    email = email.toLowerCase();


    insuranceSchema.find({
        email:email
    }, (err, check) => {

        if (err){
              return res.send({
                  success: false,
                  message: "server error"
              });
          }
  
          if (check.length == 1){
              return res.send({
                  success: false,
                  message: "This employee already has their paystub uploaded."
              });
          }

          //saving employee insurance information
        const newinsurance = new insuranceSchema();

        newinsurance.firstName= firstName;
        newinsurance.lastName= lastName;
        newinsurance.insuranceName= insuranceName;
        newinsurance.dependencies= dependencies;
        newinsurance.insuranceId= insuranceId;
        newinsurance.phoneNumber= phoneNumber;
        newinsurance.email= email;
    
        newinsurance.save((err,user) => {
        if (err){
            return res.send({
                success: false,
                message: 'Error'
            });
        }
        return res.send({
            success: true,
            message: 'Employee information has been added',
            token: user._id
        });
        });
    })
    }
}