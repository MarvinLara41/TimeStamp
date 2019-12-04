const router = require("express").Router();
const payStub = require('./payStub');
const meeting = require('./meeting');
const insurance = require ('./insurance');
const clockIn = require ('./clockIn');
const clockOut= require('./clockOut')
const signIn = require('./signIn');
const signUp =require('./signUp');
const verify = require('./verify');
const logOut = require('./logOut');
const getAllUsers = require('./getAllUsers');
const email = require('./email');
const profile = require('./profile')
const pay = require('./getPay');
const use = require('./getUser');
const getInsurance = require('./getInsurance');
// routes
router.use("/paystub", payStub);
router.use("/meeting", meeting);
router.use("/insurance", insurance);
router.use("/clockOut", clockOut);
router.use("/clockIn", clockIn);
router.use("/signIn", signIn);
router.use("/signup", signUp);
router.use("/verify", verify);
router.use("/logOut", logOut);
router.use("/users", getAllUsers);
router.use("/email", email);
router.use("/profile", profile);
router.use('/getPay', pay);
router.use('/getUser', use);
router.use('/getInsurance', getInsurance)
module.exports = router;