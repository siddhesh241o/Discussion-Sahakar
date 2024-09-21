import React from 'react';
import { Clipboard, AlertCircle } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, AreaChart, Area } from 'recharts';
import { BarChart2, GitBranch, MessageSquare, Bell, Calendar, Settings } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ProjectDashboard = () => {
  const requestsData = [
    { name: 'Mobile', value: 50 },
    { name: 'Desktop', value: 30 },
    { name: 'Tablet', value: 20 },
  ];
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row', // Stack sections horizontally by default
      height: '100%',
      backgroundColor: '#f3f4f6',
      padding: '16px', // Add some padding for better spacing
    },
    detailsSection: {
      width: '50%',
      padding: '16px',
      overflowY: 'auto',
    },
    progressSection: {
      width: '50%',
      padding: '16px',
      backgroundColor: '#e5e7eb',
    },
    sectionTitle: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#2563eb',
    },
    detailsCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      padding: '16px',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#1e40af',
      borderBottom: '2px solid #3b82f6',
      paddingBottom: '8px',
    },
    detailItem: {
      marginBottom: '16px',
      padding: '12px',
      backgroundColor: '#f0f9ff',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
    },
    detailTitle: {
      fontWeight: 600,
      textTransform: 'capitalize',
      color: '#1e40af',
      marginBottom: '4px',
    },
    detailContent: {
      color: '#4b5563',
    },
    progressTimeline: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    taskCard: {
      width: '240px',
      height: '240px',
      padding: '16px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '2vh',
      border: '2px solid black',
    },
    right: {
      backgroundColor: '#22c55e',
    },
    left: {
      backgroundColor: '#fb923c',
    },
    taskNumber: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    taskTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    actionButtons: {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      display: 'flex',
      gap: '16px',
    },
    actionBtn: {
      padding: '12px',
      borderRadius: '50%',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
    },
    yellow: {
      backgroundColor: '#facc15',
    },
    blue: {
      backgroundColor: '#3b82f6',
    },
    '@media (max-width: 768px)': {
      container: {
        flexDirection: 'column', // Stack sections vertically on mobile
      },
      detailsSection: {
        width: '100%', // Full width for details section on mobile
        padding: '16px',
      },
      progressSection: {
        width: '100%', // Full width for progress section on mobile
        padding: '16px',
      },
      taskCard: {
        width: '100%', // Task cards take full width on mobile
        height: 'auto', // Adjust height for better fit on mobile
      },
      taskNumber: {
        fontSize: '1.5rem', // Reduce task number font size on mobile
      },
      actionButtons: {
        bottom: '16px',
        right: '16px',
      },
    },
  };

  const errorData = [
    { name: 'XXX', value: 11 },
    { name: 'YYY', value: 5 },
    { name: 'ZZZ', value: 4 },
  ];

  const newAlertsData = [
    { id: '01', type: 'Error', time: '11:35' },
    { id: '02', type: 'Order', time: '11:30' },
    { id: '03', type: 'Error', time: '11:25' },
  ];

  const avgLatencyData = [
    { name: '1', Request: 4, Error: 2 },
    { name: '2', Request: 3, Error: 1 },
    { name: '3', Request: 5, Error: 3 },
    { name: '4', Request: 2, Error: 1 },
    { name: '5', Request: 4, Error: 2 },
    { name: '6', Request: 3, Error: 1 },
  ];

  const latencyDistributionData = [
    { name: '1', value: 4 },
    { name: '2', value: 3 },
    { name: '3', value: 5 },
    { name: '4', value: 2 },
    { name: '5', value: 4 },
    { name: '6', value: 3 },
    { name: '7', value: 5 },
    { name: '8', value: 6 },
  ];

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
        {/* Header */}
        <header className="bg-white shadow p-4">
          <h1 className="text-2xl font-bold">Project</h1>
          <nav className="mt-2">
            <ul className="flex space-x-4 text-gray-500">
              <li className="text-blue-600 border-b-2 border-blue-600">Dashboard</li>
              <li>Timeline</li>
              <li>Alerts</li>
              <li>Details</li>
              <li>Requests</li>
            </ul>
          </nav>
        </header>

        {/* Dashboard content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Requests by Devices */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-sm font-semibold mb-2 text-gray-500">REQUESTS BY DEVICES</h2>
            <div className="flex items-center justify-between">
              <PieChart width={120} height={120}>
                <Pie data={requestsData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8">
                  {requestsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#FF6384', '#36A2EB', '#FFCE56'][index % 3]} />
                  ))}
                </Pie>
              </PieChart>
              <div className="text-right">
                <div className="text-2xl font-bold">30/s</div>
                <div className="text-sm text-green-500">↑ 10%</div>
              </div>
            </div>
            <div className="mt-2 text-sm">
              {requestsData.map((entry, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span>{entry.name}</span>
                  <span>{entry.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Error by Type */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-sm font-semibold mb-2 text-gray-500">ERROR BY TYPE</h2>
            <div className="flex items-center justify-between">
              <PieChart width={120} height={120}>
                <Pie data={errorData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8">
                  {errorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#FF6384', '#36A2EB', '#FFCE56'][index % 3]} />
                  ))}
                </Pie>
              </PieChart>
              <div className="text-right">
                <div className="text-2xl font-bold">11/s</div>
                <div className="text-sm text-red-500">↓ 10%</div>
              </div>
            </div>
            <div className="mt-2 text-sm">
              {errorData.map((entry, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span>{entry.name}</span>
                  <span>{entry.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* New Alerts */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-sm font-semibold mb-2 text-gray-500">NEW ALERTS</h2>
            <ul className="text-sm">
              {newAlertsData.map((alert) => (
                <li key={alert.id} className="flex justify-between items-center mb-2">
                  <span className={`w-2 h-2 rounded-full ${alert.type === 'Error' ? 'bg-red-500' : 'bg-yellow-500'}`}></span>
                  <span>Alert {alert.id}</span>
                  <span>{alert.type}</span>
                  <span>{alert.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Avg Latency */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-sm font-semibold mb-2 text-gray-500">AVG LATENCY</h2>
            <div className="flex items-center">
              <div className="text-2xl font-bold mr-2">4</div>
              <div className="text-sm text-red-500">↑ 15%</div>
            </div>
            <BarChart width={200} height={100} data={avgLatencyData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
              <XAxis dataKey="name" tick={false} />
              <Tooltip />
              <Bar dataKey="Request" fill="#8884d8" />
              <Bar dataKey="Error" fill="#82ca9d" />
            </BarChart>
          </div>

          {/* Healthscore */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-sm font-semibold mb-2 text-gray-500">HEALTHSCORE</h2>
            <div className="flex items-center">
              <div className="text-2xl font-bold mr-2">82</div>
              <div className="text-sm text-green-500">↑ 10%</div>
            </div>
            <LineChart width={200} height={100} data={avgLatencyData}>
              <Line type="monotone" dataKey="Request" stroke="#8884d8" strokeWidth={2} dot={false} />
            </LineChart>
          </div>

          {/* Services */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-sm font-semibold mb-2 text-gray-500">SERVICES</h2>
            <div className="flex items-center">
              <div className="text-2xl font-bold mr-2">5</div>
              <div className="text-sm text-green-500">↑ 10%</div>
            </div>
            <AreaChart width={200} height={100} data={latencyDistributionData}>
              <Area type="monotone" dataKey="value" fill="#8884d8" stroke="#8884d8" />
            </AreaChart>
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
                <Popup>
                  A sample popup!
                </Popup>
              </Marker>
            </MapContainer>
          </div>

{/* Latency Distribution
<div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-sm font-semibold mb-2 text-gray-500">LATENCY DISTRIBUTION</h2>
    <BarChart width={250} height={200} data={avgLatencyData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
      <XAxis dataKey="name" tick={false} />
      <Tooltip />
      <Bar dataKey="Request" fill="#8884d8" />
      <Bar dataKey="Error" fill="#82ca9d" />
    </BarChart>
  </div> */}

        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;

