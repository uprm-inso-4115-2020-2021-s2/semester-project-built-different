// ES5 Syntax
const express = require("express");
const userRoutes = require("./routes/user");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

// port assigned for development
const port = 5000;
// allow passing JSON and form data in request body.
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

// route that handles all incoming user-related requests.
// http://localhost:5000/api/user
app.use("/api/user", userRoutes);

app.use("/", (req, res) =>
  res.send(
    "If you see this message, you set up the project right, congrats!",
  ),
);

// server is initialized and listening to incoming requests.
app.listen(port, () => {
  console.log(`Server listening at http://localhost/${port}`);
});
