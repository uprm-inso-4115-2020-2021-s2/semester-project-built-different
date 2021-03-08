// ES5
const { Router } = require("express");
const { signupPost } = require("../controllers/user");
const passport = require("passport");
var router = Router();

router.post(
  "/signup",
  signupPost,
  passport.authenticate("local"),
  function (req, res) {
    res.redirect("/");
  },
);
router.post(
  "/login",
  passport.authenticate("local"),
  function (req, res) {
    res.redirect("/");
  },
);

module.exports = router;
