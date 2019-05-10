const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = require('../models/user');

module.exports = (passport) => {

  passport.serializeUser ( (user, done) => { 
    done(null, user.id); 
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(null, user);
    });
  });
   // Local Login Config
  passport.use('local-login', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true 
  }, async (req, username, password, done) => { 
    console.log('passed in req: ', username, password);
    try {
      let user = await User.findOne({ username: username });
      if (!user || !user.validPassword(password)) {
        return done(null, false, { message: 'no user exists, or invalid password' });
      } else {
        console.log('LOGGED IN USER: ', user);
        return done(null, user);
      }
    } catch (err) {
      console.log('some other error occurred: ', err);
      return done(err);
    }
  }));