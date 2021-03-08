const db = require("../services/db");

const bcrypt = require("bcrypt");

const signupPost = async (req, res, next) => {
  const { name, lastName, password, email } = req.body;

  if (!name || !lastName || !password || !email) {
    res.json({ message: "One field is missing or incorrect!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  db.addDocument("users", {
    _id: Date.now().toString(),
    ...req.body,
    password: hashedPassword,
  }),
    next();
};

module.exports = { signupPost };
