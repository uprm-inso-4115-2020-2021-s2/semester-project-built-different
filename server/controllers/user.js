const bcrypt = require("bcrypt");

const handleErrors = (err) => {
  let error = "";
  switch (err.code) {
    case "23505":
      error = "Username already exists!";
      break;
    default:
      error = "Failed, try again later!";
      break;
  }

  return { error };
};

const signupPost = async (req, res, next, pool) => {
  const { name, password, email } = req.body;

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

const authGet = async (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.json(null);
  }
};

module.exports = { signupPost, authGet };
