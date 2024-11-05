import React, { useState } from 'react';
import { Upload, X, Plus, FileText } from 'lucide-react';

const Staff = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedStaffRole, setSelectedStaffRole] = useState('');

  const departments = [
    'Electricity',
    'Civil',
    'Water',
    'Gas'
  ];

  const staffMembers = [
    { name: 'Payal', role: 'Junior Engineer', department: 'Electricity', contact: '9876543210' },
    { name: 'Anil', role: 'Senior Engineer', department: 'Electricity', contact: '8765432109' },
    { name: 'Suresh', role: 'Technician', department: 'Electricity', contact: '7654321098' },
    { name: 'Ravi', role: 'Supervisor', department: 'Electricity', contact: '6543210987' },
    { name: 'Priya', role: 'Manager', department: 'Electricity', contact: '5432109876' },
    { name: 'Akash', role: 'Safety Officer', department: 'Electricity', contact: '4321098765' },
    { name: 'Nikhil', role: 'Electrician', department: 'Electricity', contact: '3210987654' },
    { name: 'Rohit', role: 'Junior Civil Engineer', department: 'Civil', contact: '2109876543' },
    { name: 'Amit', role: 'Site Supervisor', department: 'Civil', contact: '1987654321' },
    { name: 'Kavita', role: 'Project Manager', department: 'Civil', contact: '8765432198' },
    { name: 'Rahul', role: 'Surveyor', department: 'Civil', contact: '9876543212' },
    { name: 'Sneha', role: 'Draftsman', department: 'Civil', contact: '8765432112' },
    { name: 'Ajay', role: 'Safety Inspector', department: 'Civil', contact: '7654321001' },
    { name: 'Rakesh', role: 'Senior Technician', department: 'Water', contact: '9876543211' },
    { name: 'Mohan', role: 'Junior Technician', department: 'Water', contact: '1234567890' },
    { name: 'Seema', role: 'Operations Manager', department: 'Water', contact: '2345678901' },
    { name: 'Vinay', role: 'Maintenance Supervisor', department: 'Water', contact: '3456789012' },
    { name: 'Deepak', role: 'Water Quality Inspector', department: 'Water', contact: '4567890123' },
    { name: 'Manish', role: 'Pipeline Operator', department: 'Water', contact: '5678901234' },
    { name: 'Neeraj', role: 'Gas Safety Officer', department: 'Gas', contact: '6789012345' },
    { name: 'Sunita', role: 'Pipeline Engineer', department: 'Gas', contact: '7890123456' },
    { name: 'Arjun', role: 'Supervisor', department: 'Gas', contact: '8901234567' },
    { name: 'Pooja', role: 'Operations Manager', department: 'Gas', contact: '9012345678' },
    { name: 'Mahesh', role: 'Field Inspector', department: 'Gas', contact: '1230984567' },
    { name: 'Vishal', role: 'Control Room Operator', department: 'Gas', contact: '4567890987' },
    { name: 'Tarun', role: 'Junior Engineer', department: 'Electricity', contact: '7894561230' },
    { name: 'Divya', role: 'Safety Officer', department: 'Civil', contact: '9087654321' },
    { name: 'Naveen', role: 'Senior Technician', department: 'Water', contact: '7890126789' },
    { name: 'Rajesh', role: 'Supervisor', department: 'Gas', contact: '8907654321' },
    { name: 'Karan', role: 'Draftsman', department: 'Civil', contact: '5678901231' },
    { name: 'Anita', role: 'Surveyor', department: 'Civil', contact: '2345678903' },
    { name: 'Rohini', role: 'Manager', department: 'Water', contact: '3456789098' },
    { name: 'Rakesh', role: 'Technician', department: 'Gas', contact: '4561237890' },
    { name: 'Madhav', role: 'Water Supply Engineer', department: 'Water', contact: '5678904561' },
    { name: 'Riya', role: 'Senior Civil Engineer', department: 'Civil', contact: '9876543321' },
    { name: 'Prateek', role: 'Technician', department: 'Electricity', contact: '6543212345' },
    { name: 'Kiran', role: 'Control Room Operator', department: 'Gas', contact: '7654321234' },
    { name: 'Asha', role: 'Operations Manager', department: 'Electricity', contact: '8765432901' },
    { name: 'Vijay', role: 'Pipeline Operator', department: 'Water', contact: '4321987654' },
    { name: 'Naina', role: 'Field Inspector', department: 'Gas', contact: '5432198760' },
    { name: 'Ganesh', role: 'Maintenance Supervisor', department: 'Water', contact: '6543098761' },
    { name: 'Sheetal', role: 'Site Supervisor', department: 'Civil', contact: '7654901234' },
    { name: 'Pavan', role: 'Electrician', department: 'Electricity', contact: '9876501234' },
    { name: 'Raj', role: 'Gas Technician', department: 'Gas', contact: '8765012345' },
    { name: 'Vikas', role: 'Supervisor', department: 'Electricity', contact: '6547809876' },
    { name: 'Komal', role: 'Safety Officer', department: 'Civil', contact: '7654329087' },
    { name: 'Harish', role: 'Pipeline Engineer', department: 'Gas', contact: '5432167890' }
  ];

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
    setSelectedStaffRole('');
  };

  const handleStaffChange = (e) => {
    setSelectedStaffRole(e.target.value);
  };

  const handleBack = () => {
    setSelectedDepartment('');
    setSelectedStaffRole('');
  };

  const filteredStaff = staffMembers.filter(
    (staff) =>
      staff.department === selectedDepartment &&
      (selectedStaffRole === '' || staff.role === selectedStaffRole)
  );

  return (
    <div className="max-w-4xl mx-auto p-6 border-blue-900 border-2 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Select Department and Staff</h1>
      <form className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. Department Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department:</label>
              <select
                id="department"
                value={selectedDepartment}
                onChange={handleDepartmentChange}
                className="mt-1 block w-full rounded-md border-2 border-blue-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="" disabled>Select a Department</option>
                {departments.map((department) => (
                  <option key={department} value={department}>{department}</option>
                ))}
              </select>
            </div>
            {selectedDepartment && (
              <div>
                <label htmlFor="staff" className="block text-sm font-medium text-gray-700">Staff Role:</label>
                <select
                  id="staff"
                  value={selectedStaffRole}
                  onChange={handleStaffChange}
                  className="mt-1 block w-full rounded-md border-2 border-blue-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="" disabled>Select Staff Role</option>
                  {[...new Set(staffMembers.filter(staff => staff.department === selectedDepartment).map(staff => staff.role))].map((role, index) => (
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
              <h2 className="text-xl font-semibold mb-4">2. Staff Members</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredStaff.map((staff, index) => (
                  <div key={index} className="p-4 bg-white border rounded shadow-md">
                    <p><strong>Name:</strong> {staff.name}</p>
                    <p><strong>Role:</strong> {staff.role}</p>
                    <p><strong>Department:</strong> {staff.department}</p>
                    <p><strong>Contact:</strong> {staff.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {(selectedDepartment || selectedStaffRole) && (
          <div className="flex justify-end">
            <button
              onClick={handleBack}
              type="button"
              className="mt-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
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
