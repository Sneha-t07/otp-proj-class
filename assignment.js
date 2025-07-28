const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, assignmentController.addAssignment);
router.get('/', verifyToken, assignmentController.getAssignments);
router.patch('/:id/status', verifyToken, assignmentController.updateStatus);

module.exports = router;