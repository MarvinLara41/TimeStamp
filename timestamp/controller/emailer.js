const nodemailer = require('nodemailer');
const config = require('../config/config')


const getEmailData = (email, message) => {
         data = {
            from: config.email,
            to:email,
            subject: `Hello`,
            html: message
        }
        return data;
}


module.exports = {        
    sendEmail:function(email, message){    
        //transporter allows me to send emails via Gmail  
        //email and password are hidden 
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth:{
                user: config.email,
                pass: config.password
            }
        })

       const mail = getEmailData(email, message)
      
        transporter.sendMail(mail, function (err, info) {
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
        