require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);


const sendGridEmail = async ( email:string, message:string) => {
    const msg = {
        to: 'mesutkee@gmail.com', // Change to your recipient
        from:"mesutkee65@gmail.com", // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'this is testing again',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error:any) => {
          console.log(error)
        })};

export default sendGridEmail;
