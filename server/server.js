const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const cors = require('cors')

const authRoutes = require('./routes/auth/auth-routes');
const profileRoutes = require('./routes/profile/profile-routes');
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/physioAdi')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Express App 
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders:[
        'Content-Type',
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma'
    ],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api/profile',profileRoutes);

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})