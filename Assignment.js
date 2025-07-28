const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    dueDate: Date,
    description: String,
    status: { type: String, enum: ['pending', 'submitted'], default: 'pending' }
});

module.exports = mongoose.model('Assignment', assignmentSchema);