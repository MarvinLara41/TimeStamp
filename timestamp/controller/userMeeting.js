const meetings= require ('../models/meetingSchema');


module.exports = {
    Me_etings: function(req, res) {
        const {body}= req;
        const {
            event,
            user
        }= body;


        const meeting = new meetings();

        meeting.event = event;
        meeting.user = user;

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

