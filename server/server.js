require("dotenv").config();

const express = require("express"); // use express methods
const bodyParser = require("body-parser"); // allows form data to be available in req.body
const path = require("path"); //joins path segments and normalizes resulting path
const mongoose = require("mongoose");
const passport = require("passport");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const publicPath = path.join(__dirname, "..", "client/public");
const keys = require("./config/keys"); // access config keys/sensitive info
const PORT = process.env.PORT || 8000; // set PORT number
const router = require("./routes"); // connect all routing
// const url = "mongodb://localhost:27017/musictree"; // local mongoDB
const url = keys.DB; // mLabs mongoDB

const app = express();