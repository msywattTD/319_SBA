const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  image: {
    type: String, //i dont know enough about databases to do url links so string for now
  },
  textContent: { type: String },
});

module.exports = mongoose.model("Post", postsSchema);
