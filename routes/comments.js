const express = require("express");
const router = express.Router();
const Comment = require("../models/comments");

//get all comments
router.get("/", async (req, res) => {
  let commentsList = await Comment.find();
  res.send(commentsList);
});

//create a new comment
router.post("/newComment", async (req, res) => {
  let newComment = new Comment({
    parentPost: req.body.parentPost,
    textContent: req.body.textContent,
  });
  try {
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

// //edit a comment's info
router.patch("/editComment/:id", async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  try {
    comment.textContent = req.body.textContent || comment.textContent;
    comment.save();
    res.status(203).json({ comment });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

// //delete a comment
router.delete("/deleteComment/:id", async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  try {
    comment.textContent = "This Comment has been deleted."; //Not deleting the comment to preserve replies (not implimented :D)
    comment.save();
    res.status(204).json({ comment });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

module.exports = router;
