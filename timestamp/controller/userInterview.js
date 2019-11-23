const Meetup = require ('../models/interviewSchema');

module.exports = {
    interview: function (req, res) {
        const {body} = req;
        const {
            fullName,
            fullName,
            event,
            user
        } = body;

        const meetUp = new meetUp();

        interview.fullName = fullName;
        interview.fullName = fullName;
        interview.event = event;
        interview.user = user;

        meeting.save((err,user)=>{
            if (err){
                return res.send({
                    success: false,
                    message: 'Error'
                });
            }
            return res.send({
                success: true,
                message: 'Meeting has been set'
            });
        })






    }
}