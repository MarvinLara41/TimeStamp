const User = require('../../models/user')
// const userSession = require('../../models/userSession')
const UserSession = require('../../models/userSession');


module.exports = (app) => {
  
      
app.post('/api/account/signup', (req,res,next)=>{
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
})





app.post('/api/account/signin', (req,res,next)=>{
    //Sign up post request can be checked with postman using the post "/api/account/signup"
    //everything under this post request is connected to userSession.js
    const {body} = req;
    const {
        password
    }= body;

    let {
        email
    }= body;

    //if error checks if information is incorrect
    if (!email){
        return res.send({
            success: false, 
            message: 'EMAIL CAN NOT BE BLANK'
        });
    }
    if (!password){
        return res.send({
            success: false, 
            message: 'PASSWORD CAN NOT BE BLANK'
        });
    }

    email = email.toLowerCase();

    //finding if the user is valid
    User.find({
        email: email
    }, (err, users) =>{
        if (err){
            return res.send({
                success: false,
                message: "server error"
            });
        }

        if (users.length !=1){
            return res.send({
                success: false,
                message: "Invalid"
            });
        }
        //user is local to this function
        const user = users[0];
        if (!user.validPassword(password)){
            return res.send({
                success: false,
                message: "Invalid password"
            });
        }

        //if user information is correct this will run
        //data is taken from userSession.js file
        const userSession = new UserSession();

        userSession.userId = user._id;
        userSession.save((err,doc) => {
            if (err){
                return res.send({
                success: false, 
                message: 'Server error'
            });
            }

            return res.send({
                success: true,
                message: 'Valid sign in',
                token: doc._id  //this is the unique user id in mongodb
                                //the database idenitfys a user based off this token
                                //it can also be used to delete the user
            })
        });
    });

  });



app.get('/api/account/verify', (req,res,next)=>{
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

  });


app.get('/api/account/logout', (req,res,next) => {
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
    });
}

