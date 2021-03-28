const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

// use local authentication
const useLocalStrategy = (passport, pool) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        // fetch user from db
        const user = (
          await pool.query(
            "SELECT * FROM Customer WHERE email = $1",
            [email],
          )
        ).rows[0];

        if (!user) {
          return done(null, false, {
            message: "No user with that email!",
          });
        }

        try {
          if (await bcrypt.compare(password, user.password)) {
            return done(null, user);
          }
          return done(null, false, {
            message: "password is incorrect!",
          });
        } catch (err) {
          return done(err);
        }
      },
    ),
  );
  // store uid in session
  passport.serializeUser((user, done) => done(null, user.c_id));

  // retrieve user by the provided uid in the serializeUser function
  passport.deserializeUser(async (c_id, done) =>
    done(
      null,
      (
        await pool.query("SELECT * FROM Customer WHERE c_id = $1", [
          c_id,
        ])
      ).rows[0],
    ),
  );
};

module.exports = useLocalStrategy;
