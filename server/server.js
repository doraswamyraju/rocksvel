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

// Email Transporter
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // e.g. rocksvelprivatelimited@gmail.com
        pass: process.env.EMAIL_PASS  // App Password
    }
});

// Routes
// 1. Submit Enquiry (General & Planner)
app.post('/api/enquiries', async (req, res) => {
    try {
        const newEnquiry = new Enquiry(req.body);
        const savedEnquiry = await newEnquiry.save();

        // 1. Send Email to Admin
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER, // Send to self if not specified
            subject: `New Enquiry from ${req.body.name}`,
            text: `
New Enquiry Received:

Name: ${req.body.name}
Email: ${req.body.email}
Phone: ${req.body.phone}
Type: ${req.body.type}
Message/Details: ${req.body.message || 'Check Dashboard for details'}

View Dashboard: https://rocksvel.com/admin
            `
        };

        // 2. Send Confirmation to User
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: req.body.email,
            subject: 'Thank you for contacting Rocksvel',
            text: `
Hi ${req.body.name},

Thank you for reaching out to Rocksvel. We have received your inquiry and our team will get back to you shortly.

Best Regards,
Team Rocksvel
            `
        };

        // Send emails (don't block response if email fails, but log it)
        transporter.sendMail(adminMailOptions, (err, info) => {
            if (err) console.error('Error sending admin email:', err);
            else console.log('Admin email sent:', info.response);
        });

        transporter.sendMail(userMailOptions, (err, info) => {
            if (err) console.error('Error sending user email:', err);
            else console.log('User email sent:', info.response);
        });

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
