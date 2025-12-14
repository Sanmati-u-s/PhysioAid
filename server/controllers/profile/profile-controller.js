const Patient = require('../../models/Patient');
const bcrypt = require('bcryptjs');

// Get user profile
const getProfile = async (req, res) => {
    try {
        const patient = await Patient.findById(req.user.id).select('-password');
        
        if (!patient) {
            return res.status(404).json({
                success: false,
                message: 'Patient not found'
            });
        }

        res.status(200).json({
            success: true,
            data: patient
        });
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching profile'
        });
    }
};

// Update user profile
const updateProfile = async (req, res) => {
    try {
        const { patientName, email, age, gender, phone } = req.body;
        const userId = req.user.id;

        // Check if email is being changed and if it's already taken by another user
        if (email) {
            const existingPatient = await Patient.findOne({ 
                email, 
                _id: { $ne: userId } 
            });
            
            if (existingPatient) {
                return res.status(400).json({
                    success: false,
                    message: 'Email already in use by another account'
                });
            }
        }

        const updateData = {};
        if (patientName) updateData.patientName = patientName;
        if (email) updateData.email = email;
        if (age) updateData.age = age;
        if (gender) updateData.gender = gender;
        if (phone) updateData.phone = phone;

        const updatedPatient = await Patient.findByIdAndUpdate(
            userId,
            updateData,
            { new: true, runValidators: true }
        ).select('-password');

        if (!updatedPatient) {
            return res.status(404).json({
                success: false,
                message: 'Patient not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Profile updated successfully',
            data: updatedPatient
        });
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating profile'
        });
    }
};

// Change password
const changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const userId = req.user.id;

        if (!currentPassword || !newPassword) {
            return res.status(400).json({
                success: false,
                message: 'Current password and new password are required'
            });
        }

        if (newPassword.length < 6) {
            return res.status(400).json({
                success: false,
                message: 'New password must be at least 6 characters long'
            });
        }

        const patient = await Patient.findById(userId);

        if (!patient) {
            return res.status(404).json({
                success: false,
                message: 'Patient not found'
            });
        }

        // Verify current password
        const isPasswordValid = await bcrypt.compare(currentPassword, patient.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: 'Current password is incorrect'
            });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        patient.password = hashedPassword;
        await patient.save();

        res.status(200).json({
            success: true,
            message: 'Password changed successfully'
        });
    } catch (error) {
        console.error('Error changing password:', error);
        res.status(500).json({
            success: false,
            message: 'Error changing password'
        });
    }
};

module.exports = {
    getProfile,
    updateProfile,
    changePassword
};
