import React from 'react';
import { Clipboard, AlertCircle } from 'lucide-react';

const ProjectDetails = () => {
  const projectDetails = {
    name: "Gas Pipeline Installation Project",
    description: "This project aims to install gas pipelines under existing roads to expand the city's natural gas infrastructure.",
    scope: "Installation of 50 miles of gas pipelines beneath major city roads.",
    timeline: "Start: January 2025, End: December 2026",
    estimatedCost: "$25 million",
    fundingSources: "Municipal bonds and federal infrastructure grants",
    designSpecs: "36-inch diameter steel pipes, minimum depth of 4 feet",
    permits: "City excavation permit, Environmental impact assessment",
    riskAssessment: "Traffic disruption, potential utility line conflicts",
    progressReports: "Monthly updates to city council and stakeholders"
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Project Details Section */}
      <div className="w-1/2 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Project Details</h2>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-2">{projectDetails.name}</h3>
          {Object.entries(projectDetails).map(([key, value]) => (
            <div key={key} className="mb-4">
              <h4 className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</h4>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Tracking Section */}
      <div className="w-1/2 p-6 bg-gray-200">
        <h2 className="text-2xl font-bold mb-4">Progress Tracking</h2>
        <div className="space-y-4">
          {/* Completed Task */}
          <div className="bg-green-500 text-white p-4 rounded-lg flex items-center">
            <div className="text-3xl font-bold mr-4">01</div>
            <div>
              <h3 className="font-semibold">Completed</h3>
              <p>Submit a formal request with project details</p>
            </div>
          </div>

          {/* In Progress Task */}
          <div className="bg-orange-500 text-white p-4 rounded-lg flex items-center">
            <div className="text-3xl font-bold mr-4">02</div>
            <div>
              <h3 className="font-semibold">Status: 90%</h3>
              <p>Civil Department: Schedule an inspection</p>
            </div>
          </div>

          {/* Locked Task */}
          <div className="bg-gray-400 text-white p-4 rounded-lg flex items-center">
            <div className="text-3xl font-bold mr-4">03</div>
            <div>
              <h3 className="font-semibold">Locked Task</h3>
              <p>Submit a formal request with project details</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex space-x-4">
        <button className="bg-yellow-500 p-3 rounded-full shadow-lg">
          <Clipboard size={24} color="white" />
        </button>
        <button className="bg-blue-500 p-3 rounded-full shadow-lg">
          <AlertCircle size={24} color="white" />
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
