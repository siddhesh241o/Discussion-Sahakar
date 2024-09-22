import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PieChartIcon, DollarSign, Home, User } from 'lucide-react'; // Ensure these imports are correct

const Sidebar = () => {
    const navigate = useNavigate();

    const menuItems = [
        { icon: <PieChartIcon size={20} />, label: 'Dashboard', path: '/' },
        { icon: <DollarSign size={20} />, label: 'Project Details', path: '/ProjectDetails' },
        { icon: <Home size={20} />, label: 'Timeline', path: '#' }, // Add a path if needed
        { icon: <User size={20} />, label: 'Reports', path: '#' }, // Add a path if needed
    ];

    return (
        <div className="w-64 bg-white h-screen p-4 hidden md:block">
            <h2 className="text-2xl font-bold mb-8">Project Dashboard</h2>
            <nav>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center space-x-2 p-2 rounded ${
                            index === 0 ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                        onClick={() => navigate(item.path)}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
