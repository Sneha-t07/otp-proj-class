const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    phone: String,
    otp: String,
    otpExpiry: Date,
    name: String,
    branch: String,
    semester: String,
    contact: String
});

module.exports = mongoose.model('User', userSchema);