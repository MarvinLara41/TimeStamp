const user = require ('../models/user');


module.exports = {

    getAll_user: function(req, res) {


    let {body} = req;


    let {
        token_1
     }= body;

     console.log(req.body)

        console.log("backendside+>>>>>>>>>",body)

        user.find({"_id":`${body.token_1}`}).then(user => res.json(user))
        .catch(err => res.status(400).json("Error: " + err))
    }

}