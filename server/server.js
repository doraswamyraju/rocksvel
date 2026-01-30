const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/rocksvel', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Models
const Enquiry = require('./models/Enquiry');

// Routes
// 1. Submit Enquiry (General & Planner)
app.post('/api/enquiries', async (req, res) => {
    try {
        const newEnquiry = new Enquiry(req.body);
        const savedEnquiry = await newEnquiry.save();
        res.status(201).json({ message: 'Enquiry submitted successfully', data: savedEnquiry });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. Get All Enquiries (Admin)
app.get('/api/enquiries', async (req, res) => {
    try {
        // Simple security: check for a secret header or similar (To be improved)
        // For now, open for development
        const enquiries = await Enquiry.find().sort({ createdAt: -1 });
        res.json(enquiries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
