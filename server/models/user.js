const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  password: String,
  profilePic: {
    type: Schema.Types.ObjectId,
    ref: "ProfilePic"
  },
  googleID: String,
  facebookID: String,
  facebookToken: String,
  displayName: String,
  email: String,
  location: String,
  theme: String,
  img: String,
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video"
    }
  ],
  playlists: [
    {
      type: Schema.Types.ObjectId,
      ref: "Playlist"
    }
  ]
});
