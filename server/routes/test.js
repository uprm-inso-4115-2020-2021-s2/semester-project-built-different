// ES5
const { Router } = require("express");
const { mockSignupPost } = require("../controllers/test");

var router = Router();

const testRoutes = (pool) => {
  router.get("/mocksignup", (req, res) =>
    mockSignupPost(req, res, pool),
  );

  return router;
};

module.exports = testRoutes;
