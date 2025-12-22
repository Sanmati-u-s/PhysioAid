const Reminder = require('../../models/Reminder');
const transporter = require('../../config/email');

// Get all reminders for logged-in user
const getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find({ userId: req.userId }).sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      data: reminders
    });
  } catch (error) {
    console.error('Error fetching reminders:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch reminders'
    });
  }
};

// Create a new reminder
const createReminder = async (req, res) => {
  try {
    const { exerciseGoal, targetDate, frequency, reminderTime, notes } = req.body;

    if (!exerciseGoal || !targetDate || !frequency || !reminderTime) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    const reminder = new Reminder({
      userId: req.userId,
      exerciseGoal,
      targetDate,
      frequency,
      reminderTime,
      notes: notes || ''
    });

    await reminder.save();

    // Send confirmation email
    const user = req.user; // From authMiddleware
    await sendReminderEmail(user, reminder, 'created');

    res.status(201).json({
      success: true,
      message: 'Reminder created successfully',
      data: reminder
    });
  } catch (error) {
    console.error('Error creating reminder:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create reminder'
    });
  }
};

// Update a reminder
const updateReminder = async (req, res) => {
  try {
    const { id } = req.params;
    const { exerciseGoal, targetDate, frequency, reminderTime, notes, isActive } = req.body;

    const reminder = await Reminder.findOne({ _id: id, userId: req.userId });

    if (!reminder) {
      return res.status(404).json({
        success: false,
        message: 'Reminder not found'
      });
    }

    // Update fields
    if (exerciseGoal !== undefined) reminder.exerciseGoal = exerciseGoal;
    if (targetDate !== undefined) reminder.targetDate = targetDate;
    if (frequency !== undefined) reminder.frequency = frequency;
    if (reminderTime !== undefined) reminder.reminderTime = reminderTime;
    if (notes !== undefined) reminder.notes = notes;
    if (isActive !== undefined) reminder.isActive = isActive;

    await reminder.save();

    res.status(200).json({
      success: true,
      message: 'Reminder updated successfully',
      data: reminder
    });
  } catch (error) {
    console.error('Error updating reminder:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update reminder'
    });
  }
};

// Delete a reminder
const deleteReminder = async (req, res) => {
  try {
    const { id } = req.params;

    const reminder = await Reminder.findOneAndDelete({ _id: id, userId: req.userId });

    if (!reminder) {
      return res.status(404).json({
        success: false,
        message: 'Reminder not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Reminder deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting reminder:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete reminder'
    });
  }
};

// Send test reminder email
const sendTestReminder = async (req, res) => {
  try {
    const { id } = req.params;

    const reminder = await Reminder.findOne({ _id: id, userId: req.userId });

    if (!reminder) {
      return res.status(404).json({
        success: false,
        message: 'Reminder not found'
      });
    }

    const user = req.user;
    await sendReminderEmail(user, reminder, 'test');

    res.status(200).json({
      success: true,
      message: 'Test email sent successfully'
    });
  } catch (error) {
    console.error('Error sending test email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send test email'
    });
  }
};

// Helper function to send reminder emails
const sendReminderEmail = async (user, reminder, type = 'reminder') => {
  try {
    let subject, html;

    if (type === 'created') {
      subject = '✅ Exercise Reminder Created Successfully';
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Exercise Reminder Created!</h2>
          <p>Hi ${user.patientName},</p>
          <p>Your exercise reminder has been successfully created.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Reminder Details:</h3>
            <p><strong>Goal:</strong> ${reminder.exerciseGoal}</p>
            <p><strong>Target Date:</strong> ${new Date(reminder.targetDate).toLocaleDateString()}</p>
            <p><strong>Frequency:</strong> ${reminder.frequency}</p>
            <p><strong>Reminder Time:</strong> ${reminder.reminderTime}</p>
            ${reminder.notes ? `<p><strong>Notes:</strong> ${reminder.notes}</p>` : ''}
          </div>
          
          <p>You will receive reminder emails based on your selected frequency.</p>
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            Stay committed to your physiotherapy goals!
          </p>
        </div>
      `;
    } else if (type === 'test') {
      subject = '🔔 Test Exercise Reminder';
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">This is a Test Reminder!</h2>
          <p>Hi ${user.patientName},</p>
          <p>This is how your reminder emails will look:</p>
          
          <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
            <h3 style="margin-top: 0; color: #1e40af;">Your Exercise Goal:</h3>
            <p style="font-size: 18px; font-weight: bold;">${reminder.exerciseGoal}</p>
          </div>
          
          <p><strong>Target Date:</strong> ${new Date(reminder.targetDate).toLocaleDateString()}</p>
          <p><strong>Reminder Frequency:</strong> ${reminder.frequency}</p>
          ${reminder.notes ? `<p><strong>Notes:</strong> ${reminder.notes}</p>` : ''}
          
          <p style="margin-top: 30px;">Keep up with your physiotherapy routine! 💪</p>
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            This is a test email. Actual reminders will be sent according to your schedule.
          </p>
        </div>
      `;
    } else {
      // Regular reminder email
      subject = '🔔 Exercise Reminder - Time to Work on Your Goal!';
      html = `
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
    }

    const mailOptions = {
      from: '"PhysioAdi App" <noreply@physioadi.com>',
      to: user.email,
      subject: subject,
      html: html
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${user.email}`);

    // Update lastSent timestamp for regular reminders
    if (type === 'reminder') {
      reminder.lastSent = new Date();
      await reminder.save();
    }

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = {
  getReminders,
  createReminder,
  updateReminder,
  deleteReminder,
  sendTestReminder
};
