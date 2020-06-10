const { User } = require("./../models/user");
const express = require("express");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");

const router = express.Router();

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
      user: "snazzyemailservice.staging@gmail.com",
      pass: "Dusan502",
    },
  });
  const name = user.name.trim().split(/\s(\w+)$/)[0];
  const mailOptions = {
    from: "snazzyemailservice.staging@gmail.com",
    to: `${user.email}`,
    subject: "Reset password link - Snazzy",
    text:
      `Hi ${name},\n\n` +
      `You have recently requested to reset your password for your Snazzy account.\n\n` +
      `Click the link bellow to reset it.\n\n` +
      `http://localhost:3000/auth/reset/${token}\n\n` +
      `This link is only valid for the next 60 minutes.\n\n`,
  };

  transporter.sendMail(mailOptions, function (err, response) {
    if (err) console.log("there was an error", err);

    res.status(200).send("Recovery email sent");
  });
});

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

router.put("/", async (req, res) => {
  const user = await User.findById(req.body._id);
  if (!user) return res.status(400).send("Invalid user id.");
  console.log(user.email);
  let password = req.body.password;
  if (!password && password.length <= 8)
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
