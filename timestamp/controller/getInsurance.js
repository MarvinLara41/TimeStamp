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
        return res.send({
            message:"Success!",
            value:JSON.stringify(show)
        })
        console.log(JSON.stringify(show)); //if using postman the return will be rendered in terminal
 }) 
}
}