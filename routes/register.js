const _ = require("lodash");
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();
const { Plan } = require("./../models/plan");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user)
    return res.status(400).send("User with this email is already registered.");

  const plan = await Plan.findOne({ title: req.body.selectedPlan });
  if (!plan) return res.status(400).send("Invalid plan");
  const selectedPlan = {
    _id: plan._id,
    title: plan.title,
    price: plan.price,
    description: plan.description,
  };

  user = new User(_.pick(req.body, ["name", "email", "password", "isAdmin"]));
  user.selectedPlan = selectedPlan;

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  const token = user.generateAuthToken();
  res.header("x-auth-token", token).send(user._id);
});

module.exports = router;
