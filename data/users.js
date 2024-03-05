const mongoose = require("mongoose");
const User = require("../models/users"); //Do i even need this??

const allUsers = [
  {
    name: "Eleanor Adams",
    handle: "eleanor87",
  },

  {
    name: "Nathan Carter",
    handle: "nate_carter",
  },

  {
    name: "Sophie Martinez",
    handle: "sophie_mtz",
  },

  {
    name: "Liam Patel",
    handle: "liam_pat",
  },

  {
    name: "Ava Thompson",
    handle: "ava_t",
  },

  {
    name: "Oliver Wilson",
    handle: "oliver_w",
  },

  {
    name: "Emma Lopez",
    handle: "emma_lo",
  },

  {
    name: "Mia Garcia",
    handle: "mia_g",
  },

  {
    name: "James Lee",
    handle: "jameslee94",
  },

  {
    name: "Isabella Clark",
    handle: "bella_clark",
  },
];
module.exports = allUsers;
