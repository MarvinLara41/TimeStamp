
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


module.exports = router;