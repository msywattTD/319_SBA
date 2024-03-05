const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: { type: String },
  handle: { type: String },
});

module.exports = mongoose.model("User", usersSchema);
