const nodemailer = require("nodemailer");
const { EMAIL_USER, EMAIL_PASSWORD } = require("../config/email.config");

async function sendEmail(ToEmail, subject, text) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false, // true for 465, false for other ports
    auth: {
      user: EMAIL_USER, // generated ethereal user
      pass: EMAIL_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: EMAIL_USER,
    to: ToEmail,
    subject: subject,
    text: text,
  });
}

module.exports = sendEmail;
