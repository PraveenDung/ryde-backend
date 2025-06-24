// Mongoose schema definition for the User model
const mongoose = require("mongoose");

// Define the user schema as per requirement
const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Required user name
  dob: String, // Optional date of birth
  address: String, // Optional address
  description: String, // Optional user bio
  createdAt: { type: Date, default: Date.now }, // Automatically set created date
});

module.exports = mongoose.model("User", userSchema);
