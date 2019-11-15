var router = require('express').Router();
const signUp = require('../../controller/userSignUp')

router.route('/signup')
        .post(signUp.sign_Up);
module.exports = router

 
  
    
