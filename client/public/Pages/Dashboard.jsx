import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <>
            
            <div className="grid grid-cols-4 gap-6 p-6">
                {/* GIS Card */}
                <div 
                    className="relative w-full h-60 cursor-pointer rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.3)] transform transition duration-300 hover:scale-105 overflow-hidden" 
                    style={{ border: '1px solid black', borderRadius: '20px' }}
                    onClick={() => navigate('/Geotagging')}
                >
                    <div 
                        className="w-full h-full bg-cover bg-center" 
                        style={{ backgroundImage: "url('public/Images/gisNew.png')" }}
                    >
                        <div className="absolute bottom-0 w-full h-[15%] bg-gray-800 bg-opacity-90 flex items-center justify-center text-white font-bold text-lg">
                        GIS
                        </div>
                    </div>
                </div>

                {/* Geo Tagging Card */}
                <div 
                    className="relative w-full h-60 cursor-pointer rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.3)] transform transition duration-300 hover:scale-105 overflow-hidden" 
                    style={{ border: '1px solid black', borderRadius: '20px' }}
                    onClick={() => navigate('/GIS')}
                >
                    <div 
                        className="w-full h-full bg-cover bg-center" 
                        style={{ backgroundImage: "url('public/Images/geotagging.png')" }}
                    >
                        <div className="absolute bottom-0 w-full h-[15%] bg-gray-800 bg-opacity-90 flex items-center justify-center text-white font-bold text-lg">
                        Geo Tagging
                        </div>
                    </div>
                </div>

                {/* Projects Directory Card */}
                <div 
                    className="relative w-full h-60 cursor-pointer rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.3)] transform transition duration-300 hover:scale-105 overflow-hidden" 
                    style={{ border: '1px solid black', borderRadius: '20px' }}
                    onClick={() => navigate('/Projects')}
                >
                    <div 
                        className="w-full h-full bg-cover bg-center" 
                        style={{ backgroundImage: "url('public/Images/projectdirectory.png')" }}
                    >
                        <div className="absolute bottom-0 w-full h-[15%] bg-gray-800 bg-opacity-90 flex items-center justify-center text-white font-bold text-lg">
                        Projects Directory
                        </div>
                    </div>
                </div>

                {/* Meeting Scheduling Card */}
                <div 
                    className="relative w-full h-60 cursor-pointer rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.3)] transform transition duration-300 hover:scale-105 overflow-hidden" 
                    style={{ border: '1px solid black', borderRadius: '20px' }}
                    onClick={() => navigate('/Meeting')}
                >
                    <div 
                        className="w-full h-full bg-cover bg-center" 
                        style={{ backgroundImage: "url('public/Images/meeting.png')" }}
                    >
                        <div className="absolute bottom-0 w-full h-[15%] bg-gray-800 bg-opacity-90 flex items-center justify-center text-white font-bold text-lg">
                        Meeting Scheduling
                        </div>
                    </div>
                </div>

                {/* Task Manager Card */}
                <div 
                    className="relative w-full h-60 cursor-pointer rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.3)] transform transition duration-300 hover:scale-105 overflow-hidden" 
                    style={{ border: '1px solid black', borderRadius: '20px' }}
                    onClick={() => navigate('/Taskmanager')}
                >
                    <div 
                        className="w-full h-full bg-cover bg-center" 
                        style={{ backgroundImage: "url('public/Images/taskManager.png')" }}
                    >
                        <div className="absolute bottom-0 w-full h-[15%] bg-gray-800 bg-opacity-90 flex items-center justify-center text-white font-bold text-lg">
                        Task Manager
                        </div>
                    </div>
                </div>

                {/* Seminars and Workshops Card */}
                <div 
                    className="relative w-full h-60 cursor-pointer rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.3)] transform transition duration-300 hover:scale-105 overflow-hidden" 
                    style={{ border: '1px solid black', borderRadius: '20px' }}
                    onClick={() => navigate('/Seminar')}
                >
                    <div 
                        className="w-full h-full bg-cover bg-center" 
                        style={{ backgroundImage: "url('public/Images/seminarWorkshop.png')" }}
                    >
                        <div className="absolute bottom-0 w-full h-[15%] bg-gray-800 bg-opacity-90 flex items-center justify-center text-white font-bold text-lg">
                        Seminars and Workshops
                        </div>
                    </div>
                </div>

                {/* Discussions Card */}
                <div 
                    className="relative w-full h-60 cursor-pointer rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.3)] transform transition duration-300 hover:scale-105 overflow-hidden" 
                    style={{ border: '1px solid black', borderRadius: '20px' }}
                    onClick={() => navigate('/Discussion')}
                >
                    <div 
                        className="w-full h-full bg-cover bg-center" 
                        style={{ backgroundImage: "url('public/Images/discussion.png')" }}
                    >
                        <div className="absolute bottom-0 w-full h-[15%] bg-gray-800 bg-opacity-90 flex items-center justify-center text-white font-bold text-lg">
                        Discussions
                        </div>
                    </div>
                </div>

                {/* Inventory Card */}
                <div 
                    className="relative w-full h-60 cursor-pointer rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.3)] transform transition duration-300 hover:scale-105 overflow-hidden" 
                    style={{ border: '1px solid black', borderRadius: '20px' }}
                    onClick={() => navigate('/Inventory')}
                >
                    <div 
                        className="w-full h-full bg-cover bg-center" 
                        style={{ backgroundImage: "url('public/Images/inventoryNew.png')" }}
                    >
                        <div className="absolute bottom-0 w-full h-[15%] bg-gray-800 bg-opacity-90 flex items-center justify-center text-white font-bold text-lg">
                        Inventory
                        </div>
                    </div>
                </div>

                {/* Templates Card */}
                <div 
                    className="relative w-full h-60 cursor-pointer rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.3)] transform transition duration-300 hover:scale-105 overflow-hidden" 
                    style={{ border: '1px solid black', borderRadius: '20px' }}
                    onClick={() => navigate('/Templates')}
                >
                    <div 
                        className="w-full h-full bg-cover bg-center" 
                        style={{ backgroundImage: "url('public/Images/templateNew.png')" }}
                    >
                        <div className="absolute bottom-0 w-full h-[15%] bg-gray-800 bg-opacity-90 flex items-center justify-center text-white font-bold text-lg">
                        Templates
                        </div>
                    </div>
                </div>

                {/* Complaints Card */}
                <div 
                    className="relative w-full h-60 cursor-pointer rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.3)] transform transition duration-300 hover:scale-105 overflow-hidden" 
                    style={{ border: '1px solid black', borderRadius: '20px' }}
                    onClick={() => navigate('/Complaints')}
                >
                    <div 
                        className="w-full h-full bg-cover bg-center" 
                        style={{ backgroundImage: "url('public/Images/complainNew.png')" }}
                    >
                        <div className="absolute bottom-0 w-full h-[15%] bg-gray-800 bg-opacity-90 flex items-center justify-center text-white font-bold text-lg">
                        Complaints
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
