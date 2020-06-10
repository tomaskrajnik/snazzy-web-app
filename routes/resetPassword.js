const { User } = require("./../models/user");
const express = require("express");
const nodemailer = require("nodemailer");
const emailtemplate = require("./../views/email-template/email_template");
const bcrypt = require("bcrypt");

const router = express.Router();

//SEND EMAIL TO USER
router.post("/", async (req, res) => {
  if (!req.body.email) res.status(400).send("Email is required.");

  let user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).send("User with this email is not registered.");

  const token = user.generateAuthToken();

  await user.updateOne({
    resetPasswordToken: token,
    resetPasswordExpires: new Date() + 360000,
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_AUTH_USER,
      pass: process.env.EMAIL_AUTH_PASSWORD,
    },
  });
  const name = user.name.trim().split(/\s(\w+)$/)[0];
  const email_template = emailtemplate(name, token);
  const mailOptions = {
    from: "snazzyemailservice.staging@gmail.com",
    to: `${user.email}`,
    subject: "Reset password- Snazzy",
    html: email_template,
  };

  transporter.sendMail(mailOptions, function (err, response) {
    if (err) console.log("there was an error", err);

    res.status(200).send("Recovery email sent");
  });
});

//VALIDATE RECOVERY LINK
router.get("/", async (req, res) => {
  const user = await User.findOne({
    resetPasswordToken: req.query.resetPasswordToken,
    resetPasswordExpires: {
      $lt: new Date() + 360000,
    },
  });
  if (!user)
    return res
      .status(400)
      .send("Password recovery link is invalid or has expired.");

  res.status(200).send(user._id);
});

//UPDATE USER PASSWORD
router.put("/", async (req, res) => {
  const user = await User.findById(req.body._id);
  if (!user) return res.status(400).send("Invalid user id.");

  let password = req.body.password;
  if (!password || password.length <= 8)
    return res
      .status(400)
      .send("Password is required and must be at least 8 characters.");
  const repeated_password = req.body.repeated_password;
  if (password !== repeated_password)
    return res.status(400).send("Passwords must match.");

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  user.resetPasswordToken = "";
  user.resetPasswordExpires = "";
  await user.save();
  res.status(200).send("Password succesfully updated.");
});

module.exports = router;
