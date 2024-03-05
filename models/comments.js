const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  parentPost: { type: String },
  textContent: { type: String },
});

module.exports = mongoose.model("Comment", commentsSchema);
