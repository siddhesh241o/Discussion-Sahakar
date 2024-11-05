import React, { useState } from 'react';

const Staff = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedStaffRole, setSelectedStaffRole] = useState('All');

  const departments = ['All', 'Electricity', 'Civil', 'Water', 'Gas'];

  const staffMembers = [
    { name: 'Payal', role: 'Junior Engineer', department: 'Electricity', contact: '9876543210', image: '/Images/bill.jpg' },
    { name: 'Anil', role: 'Senior Engineer', department: 'Electricity', contact: '8765432109', image: '/Images/bill.jpg' },
    { name: 'Suresh', role: 'Technician', department: 'Electricity', contact: '7654321098', image: '/Images/bill.jpg' },
    // 10 Additional Staff Members with the same photo
    { name: 'Ravi', role: 'Supervisor', department: 'Electricity', contact: '6543210987', image: '/Images/bill.jpg' },
    { name: 'Priya', role: 'Manager', department: 'Electricity', contact: '5432109876', image: '/Images/bill.jpg' },
    { name: 'Akash', role: 'Safety Officer', department: 'Electricity', contact: '4321098765', image: '/Images/bill.jpg' },
    { name: 'Nikhil', role: 'Electrician', department: 'Electricity', contact: '3210987654', image: '/Images/bill.jpg' },
    { name: 'Rohit', role: 'Junior Civil Engineer', department: 'Civil', contact: '2109876543', image: '/Images/bill.jpg' },
    { name: 'Amit', role: 'Site Supervisor', department: 'Civil', contact: '1987654321', image: '/Images/bill.jpg' },
    { name: 'Kavita', role: 'Project Manager', department: 'Civil', contact: '8765432198', image: '/Images/bill.jpg' },
    { name: 'Rahul', role: 'Surveyor', department: 'Civil', contact: '9876543212', image: '/Images/bill.jpg' },
    { name: 'Sneha', role: 'Draftsman', department: 'Civil', contact: '8765432112', image: '/Images/bill.jpg' },
  ];

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
    setSelectedStaffRole('All');
  };

  const handleStaffChange = (e) => {
    setSelectedStaffRole(e.target.value);
  };

  const handleBack = () => {
    setSelectedDepartment('All');
    setSelectedStaffRole('All');
  };

  const filteredStaff = staffMembers.filter((staff) => {
    return (
      (selectedDepartment === 'All' || staff.department === selectedDepartment) &&
      (selectedStaffRole === 'All' || staff.role === selectedStaffRole)
    );
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 shadow-2xl rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Select Department and Staff</h1>
      <form className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">1. Department Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-600">Department:</label>
              <select
                id="department"
                value={selectedDepartment}
                onChange={handleDepartmentChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
              >
                {departments.map((department) => (
                  <option key={department} value={department}>{department}</option>
                ))}
              </select>
            </div>
            {selectedDepartment && (
              <div>
                <label htmlFor="staff" className="block text-sm font-medium text-gray-600">Staff Role:</label>
                <select
                  id="staff"
                  value={selectedStaffRole}
                  onChange={handleStaffChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                >
                  <option value="All">All Roles</option>
                  {[...new Set(staffMembers.filter(staff => selectedDepartment === 'All' || staff.department === selectedDepartment).map(staff => staff.role))].map((role, index) => (
                    <option key={index} value={role}>{role}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </section>
        {filteredStaff.length > 0 && (
          <section>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">2. Staff Members</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredStaff.map((staff, index) => (
                  <div key={index} className="p-4 bg-white border border-gray-200 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-200">
                    <img src={staff.image} alt={staff.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
                    <p className="text-lg font-semibold text-gray-800">{staff.name}</p>
                    <p className="text-sm text-gray-600"><strong>Role:</strong> {staff.role}</p>
                    <p className="text-sm text-gray-600"><strong>Department:</strong> {staff.department}</p>
                    <p className="text-sm text-gray-600"><strong>Contact:</strong> {staff.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {(selectedDepartment !== 'All' || selectedStaffRole !== 'All') && (
          <div className="flex justify-end">
            <button
              onClick={handleBack}
              type="button"
              className="mt-4 bg-green-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-green-600 transition duration-200"
            >
              Back
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Staff;
