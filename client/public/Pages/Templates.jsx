import React, { useState } from 'react';

const departments = {
  water: {
    title: "Water Department",
    type: "Reports, Letters, Maintenance Schedules, Compliance Documents",
    description: "The Water Department oversees water supply, treatment, and distribution. It ensures clean drinking water is available to all citizens and manages infrastructure like pipelines, reservoirs, and water treatment plants. The department also handles water quality testing and conservation efforts.",
    letter: `Vijay Nagar D-5
Civil Ward – 6
Jabera (MP)
Jan.25, 2015
To
The Administrator
Municipal Corporation Office
Jabera (MP)
Subject – Regarding better water supply
Respected Sir,
With due respect, I beg to say that I live in Vijay Nagar D-5 in Civil Ward – 6. It is a thickly populated area. Being a industry locality, it is also famous area in our city. But the water supply in our locality is not regular. It is made one time in two days and for a short time. Sometimes the water supply is not made for three days continuously. Other resources of water are not in well condition here. There are only two Hand Pumps in our locality. They are either in bad condition or out of control. They supply very little water after the hard labor. It is not enough for the people of this locality. Even the wells in our locality are dry. People cannot get water from them enough to fulfill their needs. Because of this people have to fetch water from a long distance. They spend a lot of time in bringing water. This affects in their daily work. The time which they have to spend on their necessary work has to spend on bringing water.
Therefore I request the concerning authorities to look into the matter seriously and take necessary steps for solving the problem. So the water supply may kindly be made daily in our locality. People may get rid of the problem of poor water supply.
I shall be highly obliged to you.
Thanking you sir,
Yours Faithfully
Veenu`
  },
  fire: {
    title: "Fire Department",
    type: "Incident Reports, Emergency Response Guidelines, Safety Regulations",
    description: "The Fire Department is responsible for responding to fire emergencies, rescuing citizens, and ensuring fire safety standards are upheld. It conducts regular inspections of buildings, offers fire safety training, and coordinates with local authorities during emergencies."
  },
  transport: {
    title: "Road Transport Department",
    type: "Roadwork Notifications, Infrastructure Reports, Safety Audits",
    description: "The Road Transport Department manages the planning, construction, and maintenance of public roads and highways. It ensures smooth transportation routes for vehicles and pedestrians, conducts traffic safety audits, and collaborates with other departments for major infrastructure projects."
  },
  health: {
    title: "Public Health Department",
    type: "Health Advisories, Vaccination Programs, Sanitation Reports",
    description: "The Public Health Department is responsible for promoting and protecting the health of the community. It manages vaccination programs, conducts health awareness campaigns, monitors disease outbreaks, and ensures proper sanitation standards are maintained across the city."
  },
  education: {
    title: "Education Department",
    type: "Curriculum Guidelines, School Reports, Teacher Training Programs",
    description: "The Education Department oversees the public education system, develops curriculum standards, manages school facilities, and implements educational policies. It also coordinates teacher training programs and monitors student performance across various educational institutions."
  },
  parks: {
    title: "Parks and Recreation Department",
    type: "Event Schedules, Maintenance Reports, Facility Bookings",
    description: "The Parks and Recreation Department manages public parks, recreational facilities, and community centers. It organizes community events, maintains green spaces, and provides programs for citizens of all ages to promote physical activity and community engagement."
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
