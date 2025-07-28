router.post('/:subjectId/exams', verifyToken, subjectController.addExam);
router.get('/exams/all', verifyToken, subjectController.getExams);