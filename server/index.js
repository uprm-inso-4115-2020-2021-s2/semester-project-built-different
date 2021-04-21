// ES5 Syntax
const express = require("express");
const userRoutes = require("./routes/user");
const testRoutes = require("./routes/test");
//Uncomment when routes are ready
const orderRoutes = require("./routes/order");
const useLocalStrategy = require("./strategies/local");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const initializeDB = require("./services/db");

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
    saveUninitialized: true,
  }),
);

// init DB

const pool = initializeDB();

// auth strategy
useLocalStrategy(passport, pool);

app.use("/api/users", userRoutes(pool));

app.use("/api/orders", orderRoutes(pool));

app.use("/test/users", testRoutes(pool));

// home page placeholder
app.use("/", (req, res) => res.send("Server running..."));

app.listen(port, () => {
  console.log(`Server listening at http://localhost/${port}`);
});

module.exports = pool;
