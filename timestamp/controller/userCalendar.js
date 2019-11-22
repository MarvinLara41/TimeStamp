const calendar = require ('../models/calendarSchema');

module.exports = {

    calendar: function(req, res) {
        const {body} =req;
        const{
            fullName,
            schedule,
            date,
            meetingTime,
        } = body;

        const calendar = new calendar();

        calendar.fullName = fullName;   
        calendar.schedule = schedule;
        calendar.date = date;
        calendar.meetingTime = meetingTime;

        calendar.save((err, user) => {
            if (err) {
                return res.send ({
                    success: false,
                    message: 'Error'
                });
            }
            return res.send ({
                success: true,
                message: "Date has been set"

            });


        });

     

        } }
