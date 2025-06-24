// Entry point: sets up Express app and MongoDB connection

require('dotenv').config();// Load environment variables from .env
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
app.use(express.json());// Parse JSON bodies

// Use /api/users for all user routes
app.use('/api/users', userRoutes);

// Connect to MongoDB Atlas (from .env MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Mongo error', err));

  // Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
