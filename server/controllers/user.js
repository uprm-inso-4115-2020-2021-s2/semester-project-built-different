const bcrypt = require("bcrypt");

const handleErrors = (err) => {
  switch (err.code) {
    case "23505":
      return "Username already exists!";
    default:
      return "Failed, try again later!";
  }
};

const get_api_url =  
      "https://my.api.mockaroo.com/rum2_go_customer.json?key=535f7d80"; 


async function getapi(url) { 
    // Store response 
    const response = await fetch(url); 
    
    // Store data in form of JSON 
    var data = await response.json(); 

    //Do something with data
    return data; 
}

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

const mockSignupPost = async (req, res, next, pool) => {
  data = await getapi(get_api_url);
  data.foreach(user =>{
    signupPost(data, res, next, pool);
  })
}

module.exports = { signupPost, mockSignupPost };
