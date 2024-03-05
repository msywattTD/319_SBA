const mongoose = require("mongoose");
const Comment = require("../models/comments");

const allComments = [
  {
    parentPost: "Post with the stunning architecture in the old town.",
    textContent: "Wow, I've always wanted to visit that place!",
  },

  {
    parentPost: "The image of the adorable puppies playing in the park.",
    textContent: "They are so cute! Can't resist their charm.",
  },

  {
    parentPost: "Exploring the city streets.",
    textContent: "Looks like you had a great adventure!",
  },

  {
    parentPost: "Relaxing day at the spa.",
    textContent: "I need one of those days right now!",
  },

  {
    parentPost: "Charming countryside landscapes.",
    textContent: "I miss the tranquility of the countryside.",
  },

  {
    parentPost: "Celebrating with friends and family.",
    textContent: "Nothing beats good times with loved ones!",
  },

  {
    parentPost: "Vibrant street market scenes.",
    textContent: "I love the energy of street markets!",
  },

  {
    parentPost: "Morning coffee with a good book.",
    textContent: "That's my favorite time of the day!",
  },

  {
    parentPost: "Spectacular view from the top of the hill.",
    textContent: "Breath-taking! Where is this?",
  },

  {
    parentPost: "Hiking through the mountains.",
    textContent: "I bet the air up there is amazing!",
  },

  {
    parentPost: "Artistic graffiti in the urban jungle.",
    textContent: "Such creative expressions! Love it.",
  },

  {
    parentPost: "Captivating wildlife photography.",
    textContent: "Nature's beauty captured perfectly!",
  },

  {
    parentPost: "Stunning architecture in the old town.",
    textContent: "This looks like something out of a fairy tale.",
  },

  {
    parentPost: "Serene lake reflections at dusk.",
    textContent: "What a peaceful scene. Makes me want to go there!",
  },

  {
    parentPost: "Tropical paradise getaway.",
    textContent: "Take me there now! Looks heavenly.",
  },

  {
    parentPost: "Exciting roller coaster rides at the amusement park.",
    textContent: "I can feel the adrenaline rush just by looking at it!",
  },

  {
    parentPost: "Cozy fireplace nights during winter.",
    textContent: "Perfect for snuggling up with a warm blanket!",
  },

  {
    parentPost: "Colorful hot air balloons in the sky.",
    textContent: "So vibrant and dreamy!",
  },

  {
    parentPost: "Magical starry night camping under the open sky.",
    textContent: "One with nature and the universe. Simply magical!",
  },

  {
    parentPost: "Delicious homemade dinner.",
    textContent: "I wish I could taste that right now!",
  },
];

module.exports = mongoose.model(allComments);
