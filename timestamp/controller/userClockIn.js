const ClockIn = require ('../models/clockInSchema');


module.exports = {
    clock_In: function(req, res) {

        const {body} = req;

    const {
        fullName,
        clockIn
    } = body;

    //saving employee clockin information on the database
    const timeIn = new ClockIn();

    timeIn.fullName=fullName;
    timeIn.clockIn= clockIn;

    
    timeIn.save((err,user) => {
        if (err){
            return res.send({
                success: false,
                message: 'Error'
            });
        }
        return res.send({
            success: true,
            message: 'You have clocked in'
        });
    });
}
}