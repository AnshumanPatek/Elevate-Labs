const express = require('express');
const router = express.Router();

// Register new user
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // TODO: Implement user registration
    // 1. Validate input
    // 2. Check if user exists
    // 3. Hash password
    // 4. Create user in database
    // 5. Generate JWT token
    
    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      data: {
        user: {
          email,
          name
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // TODO: Implement user login
    // 1. Validate input
    // 2. Check if user exists
    // 3. Verify password
    // 4. Generate JWT token
    
    res.json({
      status: 'success',
      message: 'Login successful',
      data: {
        token: 'dummy-token' // TODO: Replace with actual JWT token
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

// Get current user
router.get('/me', async (req, res) => {
  try {
    // TODO: Implement get current user
    // 1. Verify JWT token
    // 2. Get user from database
    
    res.json({
      status: 'success',
      data: {
        user: null
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

module.exports = router; 