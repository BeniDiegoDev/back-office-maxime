const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  token: String,
  user: String,
  firstName: String,
  lastName: String,
  society: String,
  email: String,
  emailPro: String,
  password: String,
  address: String,
  phoneNumber: String,
  web: String,
  instagram: String,
  facebook: String,
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;