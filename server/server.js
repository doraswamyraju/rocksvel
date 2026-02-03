const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({
    verify: (req, res, buf) => {
        req.rawBody = buf.toString();
    }
}));

// JSON Syntax Error Handler
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('Bad JSON received:', req.rawBody);
        return res.status(400).send({ message: 'Invalid JSON format', error: err.message });
    }
    next();
});

// Database Connection
// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/rocksvel')
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
        let adminText = `
New Enquiry Received:

Name: ${req.body.name}
Email: ${req.body.email}
Phone: ${req.body.phone}
Type: ${req.body.type}
`;

        if (req.body.courseData) {
            adminText += `
Course Only Details:
Course: ${req.body.courseData.courseTitle}
Next Batch: ${req.body.courseData.nextBatch}
Price: ${req.body.courseData.price}
`;
        }

        adminText += `
Message/Details: ${req.body.message || 'Check Dashboard for details'}

View Dashboard: https://rocksvel.com/admin
`;

        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
            subject: `New Enquiry from ${req.body.name} - ${req.body.courseData?.courseTitle || req.body.type}`,
            text: adminText
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
        const enquiries = await Enquiry.find().sort({ createdAt: -1 });
        res.json(enquiries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 3. Update Status
app.patch('/api/enquiries/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        const updated = await Enquiry.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4. Delete Enquiry
app.delete('/api/enquiries/:id', async (req, res) => {
    try {
        await Enquiry.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
