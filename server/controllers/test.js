const bcrypt = require("bcrypt");
const getapi = require("../services/mockData");

const handleErrors = (err) => {
  let error = "";
  switch (err.code) {
    case "23505":
      error = "Order already exists!";
      break;
    default:
      error = "Failed, try again later!";
      break;
  }

  return { error };
};

const mockSignupPost = async (req, res, pool) => {
  const data = await getapi();
  for (const user of data) {
    console.log(user);
    const { name, password, email } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    pool.query(
      "INSERT INTO Customer(name,password,email) VALUES ($1,$2,$3)",
      [name, hashedPassword, email],
      (err) => {
        if (err) res.json(handleErrors(err));
      },
    );
  }

  res.status(201).end();
};

module.exports = { mockSignupPost };
