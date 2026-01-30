const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    company: { type: String },
    message: { type: String },
    type: { type: String, enum: ['general', 'planner'], default: 'general' },
    plannerData: { type: Object }, // Store the JSON plan if type is 'planner'
    status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Enquiry', EnquirySchema);
