// const passport = require("passport"),
//   LocalStrategy = require("passport-local");

const signupPost = async (req, res) => {
  // req contains paramaters that is passed to the route
  // req.body ---> pass information to the backend
  //const {email,password, name, lastname} = req.body
  // res is what you are going to return from the response
  res.json(req.body);
};

// const loginPost = async (req, res) => {};

module.exports = { signupPost };
