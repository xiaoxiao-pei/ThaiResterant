
import { createTransport } from 'nodemailer';

function sendMail(
  var transporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'tissysbistro007@gmail.com',
    pass: 'Nicefood123'
  }
});

var mailOptions = {
  from: 'tissysbistro007@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
)




