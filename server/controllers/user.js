const bcrypt = require("bcrypt");

const handleErrors = (err) => {
  switch (err.code) {
    case "23505":
      return "Username already exists!";
    default:
      return "Failed, try again later!";
  }
};

const signupPost = async (req, res, next, pool) => {
  const { name, password, email } = req.body;
  console.log("here");
  const hashedPassword = await bcrypt.hash(password, 10);
  pool.query(
    "INSERT INTO Customer(name,password,email) VALUES ($1,$2,$3)",
    [name, hashedPassword, email],
    (err) => {
      if (err) res.json(handleErrors(err));
      next();
    },
  );
};

module.exports = { signupPost };
