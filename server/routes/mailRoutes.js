const express = require("express");
const mControllers = require("../controllers/mailControllers");
const router = express.Router();

// Routing for Sending email, post with method in  Model
router.route("/sendmail").post(mControllers.sendMail);

module.exports = router;