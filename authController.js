exports.getProfile = async (req, res) => {
    const user = await User.findById(req.user.id).select('-otp -otpExpiry');
    res.json(user);
};

exports.updateProfile = async (req, res) => {
    const { name, branch, semester, contact } = req.body;
    const user = await User.findByIdAndUpdate(req.user.id, { name, branch, semester, contact }, { new: true });
    res.json(user);
};