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