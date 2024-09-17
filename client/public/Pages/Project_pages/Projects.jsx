import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { AlertCircle } from 'lucide-react';
import bannerImage from '/Images/Proj_banner.png'; // Adjust path as necessary

const Sidebar = () => (
  <aside className="w-64 bg-blue-900 text-white p-4 h-screen">
    <nav>
      {[
        'My Profile',
        'Task Management',
        'Project Directory',
        'Meeting Scheduling',
        'Notifications',
        'Seminar/Workshops',
        'Discussions',
        'GIS',
        'Geotagging',
        'Inventory',
        'Templates',
        'Staff',
        'Lead',
        'Complaints',
        'Office Budget',
      ].map((item) => (
        <a key={item} href="#" className="block py-2 px-4 hover:bg-blue-700 rounded">
          {item}
        </a>
      ))}
    </nav>
  </aside>
);

const ProjectList = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleCategoryClick = (id) => {
    navigate('/ProjectDetails'); // Navigate to ProjectDetails page
  };

  return (
    <div className="mt-6">
      {[
        { id: 6432, name: 'National Gas Infrastructure Development Plan', progress: 100, category: 'Energy' },
        { id: 4530, name: 'National Gas Pipeline Expansion Initiative', progress: 64, category: 'Transport' },
        { id: 2343, name: 'National Highway Expansion Project', progress: 66, category: 'Water' },
        { id: 1234, name: 'Maharashtra Highway Expansion Project', progress: 38, category: 'Gas' },
      ].map((project) => (
        <div key={project.id} className="mb-4 bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">{project.id} - {project.name}</span>
            <button
              onClick={() => handleCategoryClick(project.id)} // Handle click
              className="text-sm bg-blue-600 text-white px-2 py-1 rounded"
            >
              View Project
            </button>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
          </div>
          <span className="text-sm text-gray-600">{project.progress}% Complete</span>
        </div>
      ))}
    </div>
  );
};

const Projects = () => (
  <div className="flex bg-gray-100 min-h-screen">
    <Sidebar />
    <main className="flex-1 p-6">
      <img src={bannerImage} alt="Project Banner" className="w-full h-56 object-cover mb-4 rounded-lg" />
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Ongoing Projects</h2>
          <div className='flex items-center gap-2'>
          <button className="px-3 py-1 bg-blue-900 text-white rounded flex items-center">
            Create Project
          </button>
          <button className="px-3 py-1 bg-blue-900 text-white rounded flex items-center">
            <AlertCircle className="mr-1" size={16} />
            Filter
          </button>
        </div>
        </div>
        <ProjectList />
      </div>
    </main>
  </div>
);

export default Projects;
