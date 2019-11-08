const ClockIn = require ('../../models/clockInSchema');
const ClockOut = require ('../../models/clockOutSchema');



module.exports = (app) => {
    //this data is in relation to the insurance information



    app.post('/api/account/clockin', (req,res, next) => {

        const {body} = req;

        const {
            fullName,
            clockIn
        } = body;


        //check errors



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
    })





    app.post('/api/account/clockout', (req,res, next) => {

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
    })
}

