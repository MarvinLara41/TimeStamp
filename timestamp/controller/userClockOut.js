const ClockOut = require ('../models/clockOutSchema');


module.exports = {
    clock_Out: function(req, res) {

        
    const {body} = req;

    const {
        fullName,
        clockOut
    } = body;


    //check errors



    //saving employee clockout information on the database
    const timeOut = new ClockOut();


    timeOut.fullName=fullName;
    timeOut.clockOut= clockOut;

    
    timeOut.save((err,user) => {
        if (err){
            return res.send({
                success: false,
                message: 'Error'
            });
        }
        return res.send({
            success: true,
            message: 'You have clocked out'
        });
    });
}
}