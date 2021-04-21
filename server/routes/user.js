// ES5
const { Router } = require("express");
const { signupPost, authGet } = require("../controllers/user");
const passport = require("passport");
var router = Router();

const userRoutes = (pool) => {
  router.post(
    "/signup",
    (req, res, next) => signupPost(req, res, next, pool),
    passport.authenticate("local"),
    (req, res) => {
      res.json(req.user);
    },
  );

  router.post(
    "/login",
    passport.authenticate("local"),
    (req, res) => {
      res.json(req.user);
    },
  );

  router.get("/auth", authGet);

  return router;
};

module.exports = userRoutes;
