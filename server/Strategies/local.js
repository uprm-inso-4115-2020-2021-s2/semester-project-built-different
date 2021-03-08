const LocalStrategy = require("passport-local").Strategy;
const db = require("../services/db");
const bcrypt = require("bcrypt");
const useLocalStrategy = (passport) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        // fetch user from db
        const user = await db.find("users", { email })[0];
        if (!user) {
          return done(null, false, {
            message: "No user with that email!",
          });
        }

        try {
          if (await bcrypt.compare(password, user.password)) {
            done(null, user);
          } else {
            return done(null, false, {
              message: "password is incorrect!",
            });
          }
        } catch (err) {
          return done(err);
        }
      },
    ),
  );

  passport.serializeUser((user, done) => done(null, user._id));
  passport.deserializeUser((_id, done) =>
    done(null, db.findById(_id)),
  );
};

module.exports = useLocalStrategy;
