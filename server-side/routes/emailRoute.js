const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// Nodemailer transport setup (replace with your own email credentials)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "oyindev@gmail.com", // Your Gmail email
    pass: "Joshua-2003", // Your Gmail password (use environment variables for better security)
  },
});

// POST route to handle email sending
router.post("/send", (req, res) => {
  const { name, email, message } = req.body; // Destructure form data

  const mailOptions = {
    from: email, // Sender's email (from the form)
    to: "oyindev@gmail.com", // Your email to receive the form data
    subject: `Message from ${name}`, // Subject with the sender's name
    text: message, // The message from the form
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString()); // Send error response if Nodemailer fails
    }
    res.status(200).send("Email sent: " + info.response); // Send success response
  });
});

module.exports = router;
