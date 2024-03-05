const mongoose = require("mongoose");
const Post = require("../models/posts");

const allPosts = [
  {
    image: "https://example.com/image1.jpg",
    textContent: "Beautiful sunset at the beach.",
  },

  {
    image: "https://example.com/image2.jpg",
    textContent: "Exploring the city streets.",
  },

  {
    image: "https://example.com/image3.jpg",
    textContent: "Delicious homemade dinner.",
  },

  {
    image: "https://example.com/image4.jpg",
    textContent: "Hiking through the mountains.",
  },

  {
    image: "https://example.com/image5.jpg",
    textContent: "Adorable puppies playing in the park.",
  },

  {
    image: "https://example.com/image6.jpg",
    textContent: "Spectacular view from the top of the hill.",
  },

  {
    image: "https://example.com/image7.jpg",
    textContent: "Morning coffee with a good book.",
  },

  {
    image: "https://example.com/image8.jpg",
    textContent: "Celebrating with friends and family.",
  },

  {
    image: "https://example.com/image9.jpg",
    textContent: "Artistic graffiti in the urban jungle.",
  },

  {
    image: "https://example.com/image10.jpg",
    textContent: "Relaxing day at the spa.",
  },

  {
    image: "https://example.com/image11.jpg",
    textContent: "Stunning architecture in the old town.",
  },

  {
    image: "https://example.com/image12.jpg",
    textContent: "Charming countryside landscapes.",
  },

  {
    image: "https://example.com/image13.jpg",
    textContent: "Vibrant street market scenes.",
  },

  {
    image: "https://example.com/image14.jpg",
    textContent: "Captivating wildlife photography.",
  },

  {
    image: "https://example.com/image15.jpg",
    textContent: "Serene lake reflections at dusk.",
  },

  {
    image: "https://example.com/image16.jpg",
    textContent: "Exciting roller coaster rides at the amusement park.",
  },

  {
    image: "https://example.com/image17.jpg",
    textContent: "Cozy fireplace nights during winter.",
  },

  {
    image: "https://example.com/image18.jpg",
    textContent: "Colorful hot air balloons in the sky.",
  },

  {
    image: "https://example.com/image19.jpg",
    textContent: "Tropical paradise getaway.",
  },

  {
    image: "https://example.com/image20.jpg",
    textContent: "Magical starry night camping under the open sky.",
  },
];
module.exports = mongoose.model(allPosts);
