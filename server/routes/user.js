// ES5
const { Router } = require("express");
const { signupPost, mockSignupPost } = require("../controllers/user");
const passport = require("passport");
var router = Router();

const userRoutes = (pool) => {
  router.post(
    "/signup",
    (req, res, next) => signupPost(req, res, next, pool),
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
  router.post(
    "/mocksignup",
    (req, res, next) => mockSignupPost(req, res, next, pool),
    passport.authenticate("local"),
    function (req, res) {
      res.redirect("/");
    },
  )
  return router;
};

module.exports = userRoutes;
