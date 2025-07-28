const Assignment = require('../models/Assignment');

exports.addAssignment = async (req, res) => {
    const { title, dueDate, description } = req.body;
    const assignment = new Assignment({
        user: req.user.id,
        title,
        dueDate,
        description
    });
    await assignment.save();
    res.json(assignment);
};

exports.getAssignments = async (req, res) => {
    const { status, dueDate } = req.query;
    let query = { user: req.user.id };
    if (status) query.status = status;
    if (dueDate) query.dueDate = { $lte: new Date(dueDate) };
    const assignments = await Assignment.find(query);
    res.json(assignments);
};

exports.updateStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const assignment = await Assignment.findOneAndUpdate(
        { _id: id, user: req.user.id },
        { status },
        { new: true }
    );
    res.json(assignment);
};