const express = require('express');
const { authMiddleware } = require('../../controllers/auth/auth-controller');
const { getProfile, updateProfile, changePassword } = require('../../controllers/profile/profile-controller');

const router = express.Router();

// All profile routes require authentication
router.get('/', authMiddleware, getProfile);
router.put('/update', authMiddleware, updateProfile);
router.put('/change-password', authMiddleware, changePassword);

module.exports = router;
