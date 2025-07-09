const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/expressError.js");
const passport = require("passport");
const LocalStratergy = require("passport-local");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");

router.get("/signup", userController.renderSignUpForm);

router.post("/signup", wrapAsync(userController.signUp));

router.get("/login", userController.renderLoginForm);

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);

// Logout

router.get("/logout", userController.logout);

module.exports = router;
