import React, { useState } from 'react';
import { Clipboard, AlertCircle } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { BarChart2, GitBranch, MessageSquare, Bell, Calendar, Settings } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Expense from './Expense';

const ProjectDashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const requestsData = [
    { name: 'Mobile', value: 50 },
    { name: 'Desktop', value: 30 },
    { name: 'Tablet', value: 20 },
  ];

  const errorData = [
    { name: 'XXX', value: 11 },
    { name: 'YYY', value: 5 },
    { name: 'ZZZ', value: 4 },
  ];

  const barChartData = [
    { name: 'Funding', amount: 100000 },
    { name: 'Budget', amount: 75000 },
    { name: 'Timeline Milestones', amount: 10 },
    { name: 'Stakeholder Engagement', amount: 5 },
    { name: 'Risk Assessment', amount: 8 },
    { name: 'Legal Compliance', amount: 6 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Expense':
        return <Expense />;
      case 'Alerts':
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold">Alerts</h2>
            {/* Alert List */}
          </div>
        );
      case 'Details':
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold">Project Details</h2>
            <div className="mt-4 space-y-4">
              <h3 className="font-semibold">Clear Objectives:</h3>
              <p>Define specific goals and outcomes for the project to guide all departments.</p>
              <h3 className="font-semibold">Roles and Responsibilities:</h3>
              <p>Clearly outline each department's duties to avoid overlaps and ensure accountability.</p>
              <h3 className="font-semibold">Funding and Budget:</h3>
              <p>Establish a comprehensive budget, detailing funding sources and allocation for each department.</p>
              <h3 className="font-semibold">Timeline with Milestones:</h3>
              <p>Create a realistic timeline that includes key milestones to track progress effectively.</p>
              <h3 className="font-semibold">Stakeholder Engagement:</h3>
              <p>Identify and engage all relevant stakeholders to gather input and build support for the project.</p>
              <h3 className="font-semibold">Risk Assessment:</h3>
              <p>Conduct a thorough risk analysis to identify potential challenges and develop mitigation strategies.</p>
              <h3 className="font-semibold">Communication Plan:</h3>
              <p>Develop a robust communication strategy for both internal coordination and public updates.</p>
              <h3 className="font-semibold">Monitoring and Evaluation Metrics:</h3>
              <p>Set clear performance indicators to measure success and facilitate adjustments as needed.</p>
              <h3 className="font-semibold">Legal Compliance:</h3>
              <p>Ensure all aspects of the project adhere to relevant laws and regulations to avoid legal issues.</p>
              <h3 className="font-semibold">Sustainability Strategy:</h3>
              <p>Plan for the long-term impact and maintenance of the project after its completion to ensure continued benefits.</p>
            </div>
          </div>
        );
      case 'Dashboard':
      default:
        return (
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Requests by Devices */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-sm font-semibold mb-2 text-gray-500">REQUESTS BY DEVICES</h2>
              <PieChart width={120} height={120}>
                <Pie data={requestsData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}>
                  {requestsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#FF6384', '#36A2EB', '#FFCE56'][index % 3]} />
                  ))}
                </Pie>
              </PieChart>
            </div>

            {/* Error by Type */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-sm font-semibold mb-2 text-gray-500">ERROR BY TYPE</h2>
              <PieChart width={120} height={120}>
                <Pie data={errorData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}>
                  {errorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#FF6384', '#36A2EB', '#FFCE56'][index % 3]} />
                  ))}
                </Pie>
              </PieChart>
            </div>

            {/* Bar Charts for Project Details */}
            <div className="bg-white p-4 rounded-lg shadow col-span-1 md:col-span-2">
              <h2 className="text-sm font-semibold mb-2 text-gray-500">PROJECT DETAILS</h2>
              <BarChart width={500} height={300} data={barChartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
            </div>

            {/* Latency by Location */}
            <div className="bg-white p-4 rounded-lg shadow col-span-1 md:col-span-2">
              <h2 className="text-sm font-semibold mb-2 text-gray-500">LATENCY BY LOCATION</h2>
              <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: '300px', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>A sample popup!</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-16 bg-blue-600 flex flex-col items-center py-4 space-y-8">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">G</div>
        <BarChart2 className="text-white" />
        <GitBranch className="text-white" />
        <MessageSquare className="text-white" />
        <Bell className="text-white" />
        <Calendar className="text-white" />
        <Settings className="text-white" />
        <div className="mt-auto">
          <img src="/api/placeholder/40/40" alt="User" className="w-10 h-10 rounded-full" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white shadow p-4">
          <h1 className="text-2xl font-bold">Project</h1>
          <nav className="mt-2">
            <ul className="flex space-x-4 text-gray-500">
              {['Dashboard', 'Timeline', 'Alerts', 'Details', 'Expense'].map((tab) => (
                <li
                  key={tab}
                  className={`cursor-pointer ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Render content based on active tab */}
        {renderContent()}
      </div>
    </div>
  );
};

export default ProjectDashboard;
