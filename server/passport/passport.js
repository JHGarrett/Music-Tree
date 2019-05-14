const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = require("../models/user");

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(null, user);
    });
  });

  // Local Signup Config
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      async (req, username, password, done) => {
        console.log("passed in req: ", username, password);
        try {
          let user = await User.findOne({ username: username });
          if (user) {
            return done(null, false); // Username already taken
          } else {
            let newUser = new User();
            newUser.username = username;
            newUser.password = newUser.generateHash(password);
            newUser = await newUser.save();
            console.log("new user created: ", newUser);
            return done(null, newUser);
          }
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  // Local Login Config
  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      async (req, username, password, done) => {
        console.log("passed in req: ", username, password);
        try {
          let user = await User.findOne({ username: username });
          if (!user || !user.validPassword(password)) {
            return done(null, false, {
              message: "no user exists, or invalid password"
            });
          } else {
            console.log("LOGGED IN USER: ", user);
            return done(null, user);
          }
        } catch (err) {
          console.log("some other error occurred: ", err);
          return done(err);
        }
      }
    )
  );

  // OAuth Google Config
  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/routes/auth/google/callback" //route the user is going to be send to after he/she authenticate
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ googleID: profile.id });
          if (!user) {
            let newUser = new User();
            newUser.googleID = profile.id;
            newUser.username = profile.displayName;
            newUser.email = profile.emails[0].value;
            newUser = await newUser.save();
            console.log("new google user created: ", newUser);
            return done(null, newUser);
          } else {
            console.log("LOGGED IN GOOGLE ACCOUNT: ", user);
            return done(null, user);
          }
        } catch (err) {
          return done(err, null);
        }
      }
    )
  );

  // Facebook Config
  passport.use(
    new FacebookStrategy(
      {
        clientID: keys.facebookClientID,
        clientSecret: keys.facebookClientSecret,
        callbackURL:
          "https://musictree.herokuapp.com/routes/auth/facebook/callback"
      },
      async (token, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ facebookID: profile.id });
          if (!user) {
            let newUser = new User();
            newUser.facebookID = profile.id;
            newUser.facebookToken = token;
            newUser.username = profile.displayName;
            newUser = await newUser.save();
            console.log("new facebook user created: ", newUser);
            return done(null, newUser);
          } else {
            console.log("LOGGED IN FACEBOOK ACCOUNT: ", user);
            return done(null, user);
          }
        } catch (err) {
          return done(err, null);
        }
      }
    )
  );
 };

