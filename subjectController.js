exports.addExam = async (req, res) => {
    const { subjectId } = req.params;
    const { subject, date, type } = req.body;
    const subj = await Subject.findOne({ _id: subjectId, user: req.user.id });
    if (!subj) return res.status(404).json({ message: "Subject not found" });
    subj.exams.push({ subject, date, type });
    await subj.save();
    res.json(subj);
};

exports.getExams = async (req, res) => {
    const subjects = await Subject.find({ user: req.user.id });
    const exams = subjects.flatMap(s => s.exams || []);
    res.json(exams);
};