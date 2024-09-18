import React, { useState } from 'react';

const departments = {
  water: {
    title: "Office Memorandum",
    type: "Reports, Letters, Maintenance Schedules, Compliance Documents",
    description:
      "An office memorandum is an internal document written to inform employees of policy, procedures, announcements, or instructions.",
    letter: `Subject: Internal Office Policy Update

Dear [Recipient],

This memorandum serves as a notification regarding [Policy/Procedure]. 
Please be advised that the following changes will take effect immediately:

1. [Change 1]
2. [Change 2]
3. [Change 3]

For any further clarification, contact [Department Name].

Sincerely,
[Your Name]
[Your Title]`
  },
  fire: {
    title: "Office Order",
    type: "Incident Reports, Emergency Response Guidelines, Safety Regulations",
    description: "An office order is used for issuing specific instructions or assignments to individuals or departments.",
    letter: `Office Order No. [Order Number]
    
Subject: [Subject of the Office Order]

The following orders are issued with immediate effect:

1. [Order Details]
2. [Order Details]

All concerned are directed to comply with the above instructions.

By Order,
[Your Name]
[Your Title]`
  },
  earth: {
    title: "Demand for Grant",
    type: "Budget Requests, Financial Allocation",
    description: "A demand for grant is a formal request for the allocation of government funds for specific purposes.",
    letter: `To,
The Financial Secretary,
[Government Department]

Subject: Demand for Grant for [Purpose]

Dear Sir/Madam,

In accordance with the financial rules, 
I am requesting a grant of [Amount] for the purpose of [Purpose]. 
The details of the required funds are outlined as follows:

1. [Itemized Cost 1]
2. [Itemized Cost 2]

Please consider this request at the earliest.

Sincerely,
[Your Name]
[Your Title]`
  },
  air: {
    title: "Notice",
    type: "Public Announcements, Circulars, Alerts",
    description: "A notice is used for informing the public or specific departments about important updates or actions.",
    letter: `NOTICE

Subject: [Subject of the Notice]

This is to inform all concerned that [Notice Details]. 
The following actions are required to be completed by [Deadline]:

1. [Action Item 1]
2. [Action Item 2]

For further information, please contact [Contact Information].

Issued by,
[Your Name]
[Your Title]`
  },
  forest: {
    title: "Circular",
    type: "Internal Communication, Policy Updates",
    description: "A circular is an internal communication document used to disseminate information within an organization.",
    letter: `CIRCULAR

Subject: [Subject of the Circular]

It is hereby informed that [Details of the Information]. 
The relevant guidelines and instructions are as follows:

1. [Instruction 1]
2. [Instruction 2]

Please ensure compliance with the above.

Sincerely,
[Your Name]
[Your Title]`
  },
  health: {
    title: "Notification",
    type: "Government Orders, Official Announcements",
    description: "A notification is a formal announcement issued by a government body regarding rules, regulations, or decisions.",
    letter: `GOVERNMENT OF [STATE]

NOTIFICATION

Subject: [Subject of the Notification]

In exercise of the powers conferred under [Relevant Law], 
the government hereby notifies the following:

1. [Notification Detail 1]
2. [Notification Detail 2]

This notification takes effect from [Date].

By order of the Government,
[Your Name]
[Your Title]`
  }
};

const Templates = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleClose = () => setSelectedDepartment(null);

  const handleOpen = (department) => setSelectedDepartment(department);

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen p-4">
      <div className="max-w-screen-lg mx-auto py-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Government Departments</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(departments).map(([key, dept]) => (
            <div key={key} className="bg-white border border-blue-100 rounded-lg shadow-md p-6 transition-transform transform hover:-translate-y-1 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{dept.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{dept.type}</p>
              <p className="text-gray-800 mb-4">{dept.description}</p>
              <button
                onClick={() => handleOpen(dept)}
                className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition"
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedDepartment && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleClose}>
          <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 lg:w-1/2 p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
              aria-label="Close popup"
            >
              &times;
            </button>
            <h2 className="text-3xl font-semibold text-blue-800 mb-2">{selectedDepartment.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{selectedDepartment.type}</p>
            <p className="text-gray-800 mb-4">{selectedDepartment.description}</p>
            {selectedDepartment.letter && (
              <pre className="bg-gray-50 border border-gray-200 rounded-md p-4 text-sm font-mono">
                {selectedDepartment.letter}
              </pre>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Templates;
