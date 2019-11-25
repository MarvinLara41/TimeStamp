const meetings= require ('../models/meetingSchema');

//@marvin "robert" made some changes its working now 


module.exports = {
    Me_etings: function(req, res) {
        const {body}= req;

        let {
           user1
        }= body;


        let {
            user2
        }= body;

    
        let {
            event
        }= body;


        let {
            event_date
        }= body;


        const meeting = new meetings({

            user1:user1,
            user2:user2,
            event:event,
            event_date:event_date

        });


        meeting.save((err,user1,user2)=>{
            if (err){
                return res.send({
                    success: false,
                    message: 'Error'
                });
            }
            return res.send({
                success: true,
                message: 'Meeting has been set',
                meeting:meeting

            })
        })
    }
}

