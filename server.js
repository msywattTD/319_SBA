const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const User = require("./models/users");
const Post = require("./models/posts");
const Comment = require("./models/comments");

const allUsers = require("./data/users");
const allPosts = require("./data/posts");
const allComments = require("./data/comments");

const app = express();
const PORT = process.env.PORT || 3000;

//connect to db
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database."));
//MIDDLEWARE
app.use(express.json());

//ROUTES
const userRouter = require("./routes/users");
app.use("/users", userRouter);

const postRouter = require("./routes/posts");
app.use("/posts", postRouter);

const commentRouter = require("./routes/comments");
app.use("/comments", commentRouter);

app.get("/seed", async (req, res) => {
  await User.deleteMany({});
  await User.create({ allUsers });

  await Comment.deleteMany({});
  await Comment.create({ allComments });

  await Post.deleteMany({});
  await Post.create({ allPosts });

  res.json({ message: "Database seed data created." });
});
//ERRORS

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
