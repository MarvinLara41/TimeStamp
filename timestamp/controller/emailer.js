const nodemailer = require("nodemailer");
const config = require("../config/config");
const sendMail = require("../models/sendMail");

module.exports = {
  sendEmail: function(req, res) {
    console.log(req.body);

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.email,
        pass: config.password,
        clientId: config.clientId,
        clientSecret: config.clientSecret,
        refreshToken: config.refreshToken,
        accessToken: config.accessToken
      }
    });

    // const htmlEmail = `
    // <ul>
    //         <li>Subject: ${req.body.subject}</li>
    //         <li>Email: ${req.body.email} </;i>
    // <ul>
    // <h3> Message<h3>
    // <p>${req.body.message}</li>
    // `

    const mail = {
      from: config.email,
      subject: req.body.subject,
      to: req.body.email,
      text: req.body.message
      // html: req.body.message
    };

    transporter.sendMail(mail, function(error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log(" email sent successfully");
        res.send("email sent successfully");
      }
      transporter.close();
    });
  }
};
