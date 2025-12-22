const cron = require('node-cron');
const Reminder = require('../models/Reminder');
const Patient = require('../models/Patient');
const transporter = require('../config/email');

// Function to send reminder email
const sendReminderEmail = async (user, reminder) => {
  try {
    const subject = '🔔 Exercise Reminder - Time to Work on Your Goal!';
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Time for Your Exercise!</h2>
        <p>Hi ${user.patientName},</p>
        <p>This is your scheduled reminder for your physiotherapy exercise goal.</p>
        
        <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
          <h3 style="margin-top: 0; color: #1e40af;">Today's Goal:</h3>
          <p style="font-size: 18px; font-weight: bold;">${reminder.exerciseGoal}</p>
        </div>
        
        <p><strong>Target Date:</strong> ${new Date(reminder.targetDate).toLocaleDateString()}</p>
        ${reminder.notes ? `<p><strong>Your Notes:</strong> ${reminder.notes}</p>` : ''}
        
        <p style="margin-top: 30px;">Remember: Consistency is key to recovery! 💪</p>
        <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
          Stay committed to your physiotherapy journey!
        </p>
      </div>
    `;

    const mailOptions = {
      from: '"PhysioAdi App" <noreply@physioadi.com>',
      to: user.email,
      subject: subject,
      html: html
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Reminder email sent to ${user.email} for goal: ${reminder.exerciseGoal}`);

    // Update lastSent timestamp
    reminder.lastSent = new Date();
    await reminder.save();

    return true;
  } catch (error) {
    console.error('❌ Error sending reminder email:', error);
    return false;
  }
};

// Function to check if reminder should be sent
const shouldSendReminder = (reminder, now) => {
  const [reminderHour, reminderMinute] = reminder.reminderTime.split(':').map(Number);
  const nowHour = now.getHours();
  const nowMinute = now.getMinutes();

  // Check if current time matches reminder time
  if (reminderHour !== nowHour || reminderMinute !== nowMinute) {
    return false;
  }

  // Check if target date has passed
  if (new Date(reminder.targetDate) < now) {
    return false;
  }

  // Check frequency
  const lastSent = reminder.lastSent ? new Date(reminder.lastSent) : null;
  
  if (!lastSent) {
    return true; // Never sent before
  }

  const hoursSinceLastSent = (now - lastSent) / (1000 * 60 * 60);

  switch (reminder.frequency) {
    case 'daily':
      return hoursSinceLastSent >= 23; // At least 23 hours to allow for slight timing differences
    case 'weekly':
      return hoursSinceLastSent >= 167; // At least 7 days (167 hours)
    case 'monthly':
      return hoursSinceLastSent >= 719; // At least 30 days (719 hours)
    default:
      return false;
  }
};

// Main function to check and send reminders
const checkAndSendReminders = async () => {
  try {
    const now = new Date();
    now.setHours(0,0,0,0)
    console.log(`⏰ Checking reminders at ${now.toLocaleTimeString()}...`);

    // Find all active reminders
    const activeReminders = await Reminder.find({ 
      isActive: true,
      targetDate: { $gte: now } // Only reminders with future target dates
    });

    if (activeReminders.length === 0) {
      console.log('No active reminders found.');
      return;
    }

    console.log(`Found ${activeReminders.length} active reminder(s)`);

    // Process each reminder
    for (const reminder of activeReminders) {
      if (shouldSendReminder(reminder, now)) {
        console.log(`📧 Sending reminder for: ${reminder.exerciseGoal}`);
        
        // Get user details
        const user = await Patient.findById(reminder.userId).select('patientName email');
        
        if (user) {
          await sendReminderEmail(user, reminder);
        } else {
          console.log(`⚠️ User not found for reminder ${reminder._id}`);
        }
      }
    }
  } catch (error) {
    console.error('❌ Error in checkAndSendReminders:', error);
  }
};

// Initialize the scheduler
const startReminderScheduler = () => {
  // Run every minute
  cron.schedule('* * * * *', () => {
    checkAndSendReminders();
  });

  console.log('✅ Reminder scheduler started - checking every minute');
  console.log('📅 Reminders will be sent automatically at scheduled times');
};

module.exports = { startReminderScheduler };
