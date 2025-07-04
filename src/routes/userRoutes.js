const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// RESTful routes mapped to controller functions

router.post("/", createUser); // Create a new user
router.get("/", getAllUsers); // Get all users
router.get("/:id", getUserById); // Get single user by ID
router.put("/:id", updateUser); // Update user by ID
router.delete("/:id", deleteUser); // Delete user by ID

module.exports = router;
