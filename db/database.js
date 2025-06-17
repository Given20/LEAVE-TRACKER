const leaveRequests = [
  {
    id: 1,
    employeeName: "John Doe",
    leaveType: "Vacation",
    startDate: "2025-06-18",
    endDate: "2025-06-20",
    status: "Pending",
    dateSubmitted: new Date().toISOString(),
    approvedBy: null
  },
  {
    id: 2,
    employeeName: "Jane Smith",
    leaveType: "Sick",
    startDate: "2025-06-19",
    endDate: "2025-06-21",
    status: "Pending",
    dateSubmitted: new Date().toISOString(),
    approvedBy: null
  }
];

function addLeaveRequest(request) {
  leaveRequests.push({
    id: leaveRequests.length + 1,
    ...request,
    status: "Pending",
    dateSubmitted: new Date().toISOString(),
    approvedBy: null
  });
  return leaveRequests[leaveRequests.length - 1];
}

function getLeaveRequests() {
  return leaveRequests;
}

function updateLeaveStatus(id, status, approvedBy) {
  const request = leaveRequests.find(r => r.id === id);
  if (request) {
    request.status = status;
    request.approvedBy = approvedBy;
    return request;
  }
  return null;
}

module.exports = { addLeaveRequest, getLeaveRequests, updateLeaveStatus };