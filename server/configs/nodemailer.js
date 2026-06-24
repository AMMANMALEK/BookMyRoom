import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify connection on startup and log result
transporter.verify((error) => {
  if (error) {
    console.error("SMTP connection failed:", error.message);
  } else {
    console.log("SMTP connection verified — ready to send emails");
  }
});

export default transporter;
