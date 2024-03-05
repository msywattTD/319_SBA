const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  image: {
    type: String, //i dont know enough about databases to do url links so string for now
    required: true,
  },
  textContent: { type: String, required: true },
});

module.exports = mongoose.model("Post", postsSchema);
