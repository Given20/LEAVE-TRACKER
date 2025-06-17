const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.post('/submit-leave', (req, res) => {
  const { employeeName, leaveType, startDate, endDate } = req.body;
  if (!employeeName || !leaveType || !startDate || !endDate) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const newRequest = db.addLeaveRequest({ employeeName, leaveType, startDate, endDate });
  res.json(newRequest);
});

router.get('/leave-requests', (req, res) => {
  res.json(db.getLeaveRequests());
});

router.post('/approve-leave', (req, res) => {
  const { id, status, approvedBy } = req.body;
  const updatedRequest = db.updateLeaveStatus(id, status, approvedBy);
  if (updatedRequest) {
    res.json(updatedRequest);
  } else {
    res.status(404).json({ error: 'Request not found' });
  }
});

module.exports = router;