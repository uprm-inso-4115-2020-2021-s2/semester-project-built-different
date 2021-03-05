// ES5
const { Router } = require("express");
const { signupPost } = require("../controllers/user");

var router = Router();

// http://localhost:3000/api/user/signup
router.post("/signup", signupPost);

module.exports = router;
