const express = require('express');
const {
  getReminders,
  createReminder,
  updateReminder,
  deleteReminder,
  sendTestReminder
} = require('../../controllers/reminder/reminder-controller');
const { authMiddleware } = require('../../controllers/auth/auth-controller');

const router = express.Router();

// Get all reminders for user
router.get('/', authMiddleware, getReminders);

// Create a new reminder
router.post('/create', authMiddleware, createReminder);

// Update a reminder
router.put('/update/:id', authMiddleware, updateReminder);

// Delete a reminder
router.delete('/delete/:id', authMiddleware, deleteReminder);

// Send test reminder email
router.post('/test/:id', authMiddleware, sendTestReminder);

module.exports = router;
