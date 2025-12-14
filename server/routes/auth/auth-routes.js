const express = require('express');
const {registerPatient,loginPatient,authMiddleware,logout} = require('../../controllers/auth/auth-controller');
const Patient = require('../../models/Patient');

const router = express.Router();

router.post('/register',registerPatient);
router.post('/login',loginPatient);
router.get('/check-auth', authMiddleware, async (req, res) => {
    try {
        const patient = await Patient.findById(req.user.id).select('patientName email role _id');
        if (patient) {
            return res.status(200).json({
                success: true,
                message: 'Authenticated',
                user: {
                    id: patient._id,
                    email: patient.email,
                    role: patient.role,
                    name: patient.patientName
                }
            });
        }
        // Fallback to token payload if DB lookup fails
        return res.status(200).json({
            success: true,
            message: 'Authenticated',
            user: req.user
        });
    } catch (error) {
        // Graceful fallback
        return res.status(200).json({
            success: true,
            message: 'Authenticated',
            user: req.user
        });
    }
});
router.post('/logout',logout);

module.exports = router;