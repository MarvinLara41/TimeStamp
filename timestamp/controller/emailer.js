const nodemailer = require('nodemailer');
const config = require('../config/config')

module.exports = {        
       
    sendEmail:function(req, res){    
        //transporter allows me to send emails via Gmail  
        //email and password are hidden 
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth:{
                user: config.email,
                pass: config.password
            }
        })

        // var subject = '';
        //message is what the reciever will recieve 
        var message = {
            from: config.email,
            to: config.reciever,
            subject: 'hey this is from stamptime6',
            text: 'fuck bitches get money',
            html: '<p>HTML version of the message</p>'
        };

        //sendMail is picking out any errors in the processs
        transporter.sendMail(message, (err, info)=> {
            console.log('err', err);
            console.log('info', info);

            res.send({
                success: true,
                message: 'Sent email'
            })
            transporter.close();
        })
        

    }
}
 
        