const Meetup = require ('../models/meetUpSchema');

module.exports = {
    meetUp: function (req, res) {
        const {body} = req;
        const {
            fullName,
            fullName,
            event,
            user
        } = body;

        const meetUp = new meetUp();

        meetUp.fullName = fullName;
        meetUp.fullName = fullName;
        meetup.event = event;
        meetup.user = user;

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