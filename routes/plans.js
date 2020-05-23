const _ = require("lodash");
const {Plan, validate} = require("./../models/plan");
const express = require("express");
const router = express.Router();
const auth = require("./../middleware/auth");
const admin = require("./../middleware/admin");

router.get("/", async (req, res) => {
  const plans = await Plan.find().sort("price");
  res.status(200).send(plans);
});

router.post("/", [auth, admin], async (req, res) => {
  const {error} = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const plan = new Plan(_.pick(req.body, ["title", "price", "description"]));
  await plan.save();

  res.status(200).send(plan);
});

module.exports = router;
