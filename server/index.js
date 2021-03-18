// ES5 Syntax
const express = require("express");
const userRoutes = require("./routes/user");
const userTestRoutes = require("./__tests__/routes/user");
const useLocalStrategy = require("./Strategies/local");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

// initialized express instance
const app = express();

// port assigned for development
const port = 5000;

// configurations

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(
  session({
    secret: "built-different",
    resave: false,
    saveUnitialized: false,
  }),
);

// auth strategy
useLocalStrategy(passport);

// test routes for development
if (process.env.NODE_ENV !== "production") {
  app.use("/test/users", userTestRoutes);
}

app.use("/api/users", userRoutes);

// home page placeholder
app.use("/", (req, res) =>
  res.send(
    "Nomar this isn't the home page this is the server root directory ;)",
  ),
);

app.listen(port, () => {
  console.log(`Server listening at http://localhost/${port}`);
});
