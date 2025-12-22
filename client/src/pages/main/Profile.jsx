import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, updateProfile, changePassword } from '../../store/profile';
import { getReminders, createReminder, updateReminder, deleteReminder, sendTestReminder } from '../../store/reminder';
import useScrollToTop from '../../hooks/useScrollToTop';
import { toast } from 'sonner';
import { User, Mail, Phone, Calendar, Users, Lock, Edit2, Save, X, Bell, Target, Clock, Trash2, Send } from 'lucide-react';

const Profile = () => {
  useScrollToTop();
  const dispatch = useDispatch();
  const { profile, isLoading } = useSelector((state) => state.profile);
  const { reminders, isLoading: remindersLoading } = useSelector((state) => state.reminder);
  const { user } = useSelector((state) => state.auth);

  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [showReminderForm, setShowReminderForm] = useState(false);
  const [editingReminder, setEditingReminder] = useState(null);
  
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    age: '',
    gender: '',
    phone: '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [reminderData, setReminderData] = useState({
    exerciseGoal: '',
    targetDate: '',
    frequency: 'daily',
    reminderTime: '09:00',
    notes: ''
  });

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getReminders());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setFormData({
        patientName: profile.patientName || '',
        email: profile.email || '',
        age: profile.age || '',
        gender: profile.gender || '',
        phone: profile.phone || '',
      });
    }
  }, [profile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Reset form data if cancelling
      setFormData({
        patientName: profile.patientName || '',
        email: profile.email || '',
        age: profile.age || '',
        gender: profile.gender || '',
        phone: profile.phone || '',
      });
    }
    setIsEditing(!isEditing);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    
    if (!formData.patientName || !formData.email || !formData.age || !formData.gender || !formData.phone) {
      toast.error('All fields are required');
      return;
    }

    try {
      const result = await dispatch(updateProfile(formData)).unwrap();
      if (result.success) {
        toast.success('Profile updated successfully');
        setIsEditing(false);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to update profile');
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      toast.error('All password fields are required');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }

    if (passwordData.newPassword.length < 6) {
      toast.error('New password must be at least 6 characters');
      return;
    }

    try {
      const result = await dispatch(changePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      })).unwrap();
      
      if (result.success) {
        toast.success('Password changed successfully');
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
        setIsChangingPassword(false);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to change password');
    }
  };

  const handleReminderChange = (e) => {
    const { name, value } = e.target;
    setReminderData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateReminder = async (e) => {
    e.preventDefault();

    if (!reminderData.exerciseGoal || !reminderData.targetDate || !reminderData.reminderTime) {
      toast.error('Please fill all required fields');
      return;
    }

    try {
      const result = await dispatch(createReminder(reminderData)).unwrap();
      if (result.success) {
        toast.success('Reminder created successfully! Check your email for confirmation.');
        setReminderData({
          exerciseGoal: '',
          targetDate: '',
          frequency: 'daily',
          reminderTime: '09:00',
          notes: ''
        });
        setShowReminderForm(false);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to create reminder');
    }
  };

  const handleUpdateReminder = async (e) => {
    e.preventDefault();

    if (!reminderData.exerciseGoal || !reminderData.targetDate || !reminderData.reminderTime) {
      toast.error('Please fill all required fields');
      return;
    }

    try {
      const result = await dispatch(updateReminder({ 
        id: editingReminder._id, 
        data: reminderData 
      })).unwrap();
      if (result.success) {
        toast.success('Reminder updated successfully!');
        setReminderData({
          exerciseGoal: '',
          targetDate: '',
          frequency: 'daily',
          reminderTime: '09:00',
          notes: ''
        });
        setEditingReminder(null);
        setShowReminderForm(false);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to update reminder');
    }
  };

  const handleDeleteReminder = async (id) => {
    if (!window.confirm('Are you sure you want to delete this reminder?')) {
      return;
    }

    try {
      const result = await dispatch(deleteReminder(id)).unwrap();
      if (result.success) {
        toast.success('Reminder deleted successfully');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to delete reminder');
    }
  };

  const handleSendTestEmail = async (id) => {
    try {
      const result = await dispatch(sendTestReminder(id)).unwrap();
      if (result.success) {
        toast.success('Test email sent! Check your inbox.');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to send test email');
    }
  };

  const handleEditReminder = (reminder) => {
    setEditingReminder(reminder);
    setReminderData({
      exerciseGoal: reminder.exerciseGoal,
      targetDate: new Date(reminder.targetDate).toISOString().split('T')[0],
      frequency: reminder.frequency,
      reminderTime: reminder.reminderTime,
      notes: reminder.notes || ''
    });
    setShowReminderForm(true);
  };

  const handleCancelReminderForm = () => {
    setShowReminderForm(false);
    setEditingReminder(null);
    setReminderData({
      exerciseGoal: '',
      targetDate: '',
      frequency: 'daily',
      reminderTime: '09:00',
      notes: ''
    });
  };

  const handleToggleActive = async (reminder) => {
    try {
      const result = await dispatch(updateReminder({
        id: reminder._id,
        data: { isActive: !reminder.isActive }
      })).unwrap();
      if (result.success) {
        toast.success(`Reminder ${!reminder.isActive ? 'activated' : 'deactivated'}`);
      }
    } catch (error) {
      toast.error('Failed to update reminder status');
    }
  };

  if (isLoading && !profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">My Profile</h1>
          <p className="text-gray-600 mt-2">Manage your personal information and settings</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          {/* Profile Header */}
          <div className="bg-linear-to-r from-blue-600 to-blue-700 p-8 text-white">
            <div className="flex items-center gap-6">
              <div className="h-24 w-24 rounded-full bg-white/20 flex items-center justify-center text-4xl font-bold">
                {profile?.patientName?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div>
                <h2 className="text-3xl font-bold">{profile?.patientName}</h2>
                <p className="text-blue-100 mt-1">{profile?.email}</p>
                <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm mt-2">
                  {profile?.role === 'admin' ? 'Administrator' : 'Patient'}
                </span>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <form onSubmit={handleUpdateProfile} className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
              {!isEditing ? (
                <button
                  type="button"
                  onClick={handleEditToggle}
                  className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Edit2 size={18} />
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400"
                  >
                    <Save size={18} />
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleEditToggle}
                    className="flex items-center cursor-pointergap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <X size={18} />
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User size={16} className="inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail size={16} className="inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-600"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar size={16} className="inline mr-2" />
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-600"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users size={16} className="inline mr-2" />
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-600"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Phone */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone size={16} className="inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-600"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Change Password Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Lock size={20} />
                Change Password
              </h3>
              <p className="text-gray-600 text-sm mt-1">Update your password to keep your account secure</p>
            </div>
            {!isChangingPassword && (
              <button
                type="button"
                onClick={() => setIsChangingPassword(true)}
                className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Change Password
              </button>
            )}
          </div>

          {isChangingPassword && (
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter current password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter new password (min. 6 characters)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Confirm new password"
                />
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 cursor-pointer bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400"
                >
                  Update Password
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsChangingPassword(false);
                    setPasswordData({
                      currentPassword: '',
                      newPassword: '',
                      confirmPassword: '',
                    });
                  }}
                  className="px-6 py-2 cursor-pointer bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Exercise Reminders Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Bell size={20} />
                Exercise Reminders
              </h3>
              <p className="text-gray-600 text-sm mt-1">Set goals and receive email reminders for your exercises</p>
            </div>
            {!showReminderForm && (
              <button
                type="button"
                onClick={() => setShowReminderForm(true)}
                className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Target size={18} />
                New Reminder
              </button>
            )}
          </div>

          {/* Reminder Form */}
          {showReminderForm && (
            <form onSubmit={editingReminder ? handleUpdateReminder : handleCreateReminder} className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                {editingReminder ? 'Edit Reminder' : 'Create New Reminder'}
              </h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Exercise Goal *
                  </label>
                  <textarea
                    name="exerciseGoal"
                    value={reminderData.exerciseGoal}
                    onChange={handleReminderChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="E.g., Complete 3 sets of shoulder exercises daily"
                    rows="2"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Date *
                    </label>
                    <input
                      type="date"
                      name="targetDate"
                      value={reminderData.targetDate}
                      onChange={handleReminderChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Frequency *
                    </label>
                    <select
                      name="frequency"
                      value={reminderData.frequency}
                      onChange={handleReminderChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reminder Time *
                    </label>
                    <input
                      type="time"
                      name="reminderTime"
                      value={reminderData.reminderTime}
                      onChange={handleReminderChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={reminderData.notes}
                    onChange={handleReminderChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Additional notes or instructions..."
                    rows="2"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={remindersLoading}
                    className="px-6 py-2 cursor-pointer bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400"
                  >
                    {editingReminder ? 'Update Reminder' : 'Create Reminder'}
                  </button>
                  <button
                    type="button"
                    onClick={handleCancelReminderForm}
                    className="px-6 py-2 cursor-pointer bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Reminders List */}
          {remindersLoading && reminders.length === 0 ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading reminders...</p>
            </div>
          ) : reminders.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Bell size={48} className="mx-auto mb-4 opacity-50" />
              <p>No reminders set yet. Create one to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {reminders.map((reminder) => (
                <div
                  key={reminder._id}
                  className={`p-4 rounded-lg border-2 ${
                    reminder.isActive 
                      ? 'bg-white border-blue-200' 
                      : 'bg-gray-50 border-gray-300 opacity-60'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Target size={18} className="text-blue-600" />
                        <h4 className="font-semibold text-gray-800">{reminder.exerciseGoal}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          reminder.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {reminder.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>Target: {new Date(reminder.targetDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          <span>{reminder.reminderTime} • {reminder.frequency}</span>
                        </div>
                        {reminder.lastSent && (
                          <div className="flex items-center gap-2">
                            <Send size={14} />
                            <span>Last: {new Date(reminder.lastSent).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>
                      
                      {reminder.notes && (
                        <p className="mt-2 text-sm text-gray-600 italic">{reminder.notes}</p>
                      )}
                    </div>

                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleToggleActive(reminder)}
                        className={`p-2 rounded-lg transition-colors cursor-pointer ${
                          reminder.isActive 
                            ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' 
                            : 'bg-green-100 text-green-700 hover:bg-green-200'
                        }`}
                        title={reminder.isActive ? 'Deactivate' : 'Activate'}
                      >
                        <Bell size={16} />
                      </button>
                      <button
                        onClick={() => handleSendTestEmail(reminder._id)}
                        className="p-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors cursor-pointer"
                        title="Send test email"
                      >
                        <Send size={16} />
                      </button>
                      <button
                        onClick={() => handleEditReminder(reminder)}
                        className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                        title="Edit"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteReminder(reminder._id)}
                        className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
