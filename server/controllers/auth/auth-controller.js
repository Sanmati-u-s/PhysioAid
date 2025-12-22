const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Patient = require('../../models/Patient');

// Register
const registerPatient = async (req, res) => {
    const { patientName, email, password, age, phone, gender } = req.body;

    try {
        // Validate all fields
        if (!patientName || !email || !password || !age || !phone || !gender) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required.'
            });
        }

        // Check if user already exists with the email
        const existing = await Patient.findOne({ email });
        if (existing) {
            return res.status(409).json({
                success: false,
                message: 'Patient already exists with this email.'
            });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the new patient
        const newPatient = new Patient({
            patientName,
            email,
            password: hashedPassword,
            age,
            phone,
            gender
        });

        await newPatient.save();
        return res.status(201).json({
            success: true,
            message: 'Patient registered successfully.'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error.' });
    }
}

//Login 
const loginPatient = async (req,res) => {
    const {email,password} = req.body;

    try{
        const checkPatient = await Patient.findOne({email});
        if(!checkPatient){
            return res.status(404).json({success:false, message:'Patient not found'});
        }

        const checkPassword = await bcrypt.compare(password, checkPatient.password);

        if(!checkPassword){
            return res.status(401).json({success:false, message:'Invalid credentials'});
        }

        const token = jwt.sign({
            id: checkPatient._id,
            email: checkPatient.email,
            role: checkPatient.role,
            name: checkPatient.patientName
        }, 'CLIENT_SECERT_KEY', {expiresIn:'7d'});

        res.cookie('token',token, {httpOnly:true,secure:false}).json({
            success:true,
            message:'Login successful',
            user:{
                email:checkPatient.email,
                name:checkPatient.patientName,
                role:checkPatient.role,
                id:checkPatient._id
            }
        })
    }catch(error){
        console.error(error);
        return res.status(500).json({success:false, message:'Internal server error.'});
    }
}

// Auth middleware
const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token || '';
    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized user!'
        });
    }

    try {
        const decoded = jwt.verify(token, 'CLIENT_SECERT_KEY');
        req.user = decoded;
        req.userId = decoded.id;
        
        // Fetch full user details for email functionality
        const patient = await Patient.findById(decoded.id).select('-password');
        if (patient) {
            req.user = {
                id: patient._id,
                email: patient.email,
                patientName: patient.patientName,
                role: patient.role
            };
        }
        
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid token!'
        });
    }
}

//Logout
const logout = async(req,res) => {
    res.clearCookie('token').json({
        success:true,
        message:'Logged out successfully'
    });
}


module.exports = {
    registerPatient,
    loginPatient,
    authMiddleware,
    logout
}