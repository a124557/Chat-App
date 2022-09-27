const express = require("express");
const {
  registerUser,
  authenticateUser,
} = require("../controllers/userControllers.js");

//Initialize our router
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authenticateUser);

module.exports = router;
