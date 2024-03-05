const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  textContent: { type: String },
});

module.exports = mongoose.model("Comment", commentsSchema);
