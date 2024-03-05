const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

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

// const postsRouter = require("./routes/posts");
// app.use("/posts", postRoutes);

// const commentsRouter = require("./routes/comments");
// app.use("/comments", commentRoutes);

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
