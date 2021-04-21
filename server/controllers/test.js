const bcrypt = require("bcrypt");
const axios = require("axios");

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

const get_api_url =
  "https://my.api.mockaroo.com/rum2_go_customer.json?key=535f7d80";

async function getapi(url) {
  // Store response
  const response = await axios.get(url);

  // Store data in form of JSON

  //Do something with data
  return response.data;
}

const mockSignupPost = async (req, res, pool) => {
  const data = await getapi(get_api_url);
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
