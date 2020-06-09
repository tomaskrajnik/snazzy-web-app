const { User } = require("./../models/user");
const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
  if (!req.body.email) res.status(400).send("Email is required");

  let user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).send("User with this email is not registered");

  const token = user.generateAuthToken();

  await User.updateOne({
    resetPasswordToken: token,
    resetPasswordExpires: Date.now() + 360000,
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "snazzyemailservice.staging@gmail.com",
      pass: "Dusan502",
    },
  });

  const mailOptions = {
    from: "snazzyemailservice.staging@gmail.com",
    to: `${user.email}`,
    subject: "Reset password link - Snazzy",
    text:
      `Here is the link to reset your password.\n\n` +
      `http://localhost:3000/auth/reset/${token}\n`,
  };

  transporter.sendMail(mailOptions, function (err, response) {
    if (err) console.log("there was an error", err);
    console.log(response);
    res.status(200).send("Recovery email sent");
  });
});

module.exports = router;
