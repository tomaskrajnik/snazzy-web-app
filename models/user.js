const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require("mongoose");
const Joi = require("Joi");
Joi.objectId = require("joi-objectid")(Joi);
const { planSchema } = require("./plan");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    minlenght: 3,
    maxlength: 50,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024,
  },
  selectedPlan: {
    type: planSchema,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      exp: new Date().setDate(new Date().getDate() + 1),
      isAdmin: this.isAdmin,
    },
    config.get("TOKEN_PRIVATE_KEY")
  );
  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(3).max(50).required().email(),
    password: Joi.string().min(8).max(255).required(),
    isAdmin: Joi.boolean(),
    selectedPlan: Joi.string().required(),
  });
  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
