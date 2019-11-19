var router = require('express').Router();
const signIn= require('../../controller/userSignIn');

router.route('/account/signIn')
    .post(signIn.sign_In)


module.exports = router


