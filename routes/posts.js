const express = require("express");
const router = express.Router();
const Post = require("../models/posts");

//get all posts
router.get("/", async (req, res) => {
  let postsList = await Post.find();
  res.send(postsList);
});

//create a new post
router.post("/newPost", async (req, res) => {
  let newPost = new Post({
    image: req.body.image,
    textContent: req.body.textContent,
  });
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

// //edit a post's info
router.patch("/editPost/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  try {
    (post.image = req.body.image || post.image),
      (post.textContent = req.body.textContent || post.textContent);
    post.save();
    res.status(203).json({ post });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

// //delete a post
router.delete("/deletePost/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  try {
    (post.image = "This Post has been deleted."), //Not deleting the post to preserve comments
      (post.textContent = "This Post has been deleted.");
    post.save();
    res.status(204).json({ post });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

module.exports = router;
