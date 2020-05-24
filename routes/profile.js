const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const auth = require("./../middleware/auth");
const validateObjectId = require("./../middleware/validateObjectId");

router.get("/:id", [auth, validateObjectId], async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user)
    return res.status(404).send("User with the given id does not exist");

  res.send(user);
});

module.exports = router;
