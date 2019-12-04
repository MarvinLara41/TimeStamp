const UserSession = require('../models/userSession');


module.exports = {
    log_Out: function(req, res) {
        //verify token, make sure its not deleted
    const {query} = req;
    const {token} = query;
   
   
    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    }, {
        $set:{
            isDeleted: true
           }
    }, null,(err, sessions) => {
        if (err){
            return res.send({
                success: false,
                message: 'logout error'
            });
            }
   
            return res.send({
                success: true,
                message: 'logout is good'
            });
       });
}
}

