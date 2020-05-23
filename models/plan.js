const mongoose = require("mongoose");
const Joi = require("Joi");

const planSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Plan = mongoose.model("Plan", planSchema);

function validatePlan(plan) {
  const schema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
  });
  return Joi.validate(plan, schema);
}

exports.Plan = Plan;
exports.validate = validatePlan;
exports.planSchema = planSchema;
