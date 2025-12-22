const mongoose = require('mongoose');

const ReminderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  exerciseGoal: {
    type: String,
    required: true
  },
  targetDate: {
    type: Date,
    required: true
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly', 'monthly'],
    required: true
  },
  reminderTime: {
    type: String, // Format: "HH:MM" (24-hour format)
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastSent: {
    type: Date,
    default: null
  },
  notes: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Reminder', ReminderSchema);
