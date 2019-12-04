const User = require('../models/user');

module.exports = {
    sign_Up: function(req, res) {
            //Sign up post request can be checked with postman using the post "/api/account/signup"
    //everything under this post request is connected to user.js
    const {body} = req;
    const {
        firstName,
        lastName,
        password
    }= body;

    let {
        email
    }= body;

    
    
    //if error checks incase the user forgets to enter information
    if (!firstName){
        return res.send({
            success: false, 
            message: 'Error: must fill in first name'
        });
    }
    if (!lastName){
        return res.send({
            success: false, 
            message: 'Error: must fill in last name'
        });
    }
    if (!email){
        return res.send({
            success: false, 
            message: 'Error: must fill in email'
        });
    }
    if (!password){
        return res.send({
            success: false, 
            message: 'Error: must fill in password'
        });
    }


    
    email = email.toLowerCase()

    //verify email doesn't exist  and Save 
    User.find({
        email: email
    },(err, previousUser)=>{
        if(err){
            return res.send({
                success: false, 
                message: 'Error: must fill in password'
            });
        }else if (previousUser.length > 0){
            return res.send({
                success: false, 
                message: 'Error: user already exists'
            });
        }


        //save new user
        const newUser = new User();

        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.password = newUser.generateHash(password);
        newUser.save((err,user) => {
            if (err){
                return res.send({
                success: false, 
                message: 'Server error'
            });
        }
        return res.send({
            success: true, 
            message: 'Signed up'
        });
    });
  })
    }
}
