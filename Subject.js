const examSchema = new mongoose.Schema({
    subject: String,
    date: Date,
    type: String
});

const subjectSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    description: String,
    notes: [noteSchema],
    exams: [examSchema]
});