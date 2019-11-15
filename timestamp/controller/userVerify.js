const UserSession = require('../models/userSession');

module.exports = {
    Verify: function(req,res,next){
        //verify token, make sure its not deleted
        const {query} = req;
        const {token} = query;
       
       
        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            if (err){
                return res.send({
                    success: false,
                    message: 'Verification error'
                });
            }
       
            if(sessions.length !=1){
                return res.send({
                    success: false,
                    message: 'server error in verification'
                });
            }else {
                return res.send({
                    success: true,
                    message: 'Verification is good'
                })
            }
        });
       
}

}