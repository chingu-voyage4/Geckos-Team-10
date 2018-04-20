const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  mobile_number: String,
  email: String,
  password: String
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
