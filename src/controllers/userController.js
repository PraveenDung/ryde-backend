// Import User model
const User = require("../models/User");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    // Create and save new user from request body
    const user = await User.create(req.body);
    res.status(201).json(user); // Return the created user
  } catch (err) {
    res.status(400).json({ error: err.message }); // Return validation error
  }
};

// Retrieve all users
exports.getAllUsers = async (req, res) => {
  const users = await User.find(); // Fetch all user records
  res.json(users);
};

// Retrieve a user by ID
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id); // Find user by Mongo ID
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }); // Update and return new doc
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id); // Delete by ID
  if (!user) return res.status(404).json({ error: "User not found" });
  res.status(204).send(); // No content response
};
