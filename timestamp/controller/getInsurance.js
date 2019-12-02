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

        console.log(JSON.stringify(show));
              

 }) 
}
}