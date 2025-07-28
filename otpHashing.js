const bcrypt = require('bcryptjs');

async function hashOtp(otp) {
    return await bcrypt.hash(otp, 8);
}

async function verifyOtp(otp, hash) {
    return await bcrypt.compare(otp, hash);
}

module.exports = { hashOtp, verifyOtp };