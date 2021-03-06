const db = require("../services/db");

const bcrypt = require("bcrypt");

const signupPost = async (req, res) => {
  // req contains paramaters that is passed to the route
  // req.body ---> pass information to the backend
  //const {email,password, name, lastname} = req.body
  // res is what you are going to return from the response
  const { name, lastName, password, email } = req.body;
  // simple error handling
  if (!name || !lastName || !password || !email) {
    res.json({ message: "One field is missing or incorrect!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  res.status(201).json(
    db.addDocument("users", {
      _id: Date.now().toString(),
      ...req.body,
      password: hashedPassword,
    }),
  );
};

// const loginPost = async (req, res) => {};

module.exports = { signupPost };
