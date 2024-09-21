import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="cards-list">
                
                <div className="card-container" onClick={() => navigate('/Geotagging')}>
                    <div className="card" style={{ backgroundImage: 'url(public/Images/gisNew.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="card-label">GIS</div>
                </div>
                 <div className="card-container" onClick={() => navigate('/GIS')}>
                    <div className="card" style={{ backgroundImage: 'url(public/Images/geotagging.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="card-label">Geo Tagging</div>
                </div>
                <div className="card-container" onClick={() => navigate('/Projects')}>
                    <div className="card" style={{ backgroundImage: 'url(public/Images/projectdirectory.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="card-label">Projects Directory</div>
                </div>
                <div className="card-container" onClick={() => navigate('/Meeting')}>
                    <div className="card" style={{ backgroundImage: 'url(public/Images/meeting.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="card-label">Meeting Scheduling</div>
                </div>
                <div className="card-container" onClick={() => navigate('/Taskmanager')}>
                    <div className="card" style={{ backgroundImage: 'url(public/Images/taskManager.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="card-label">Task Manager</div>
                </div>
                <div className="card-container" onClick={() => navigate('/Seminar')}>
                    <div className="card" style={{ backgroundImage: 'url(public/Images/seminarWorkshop.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="card-label">Seminars and Workshops</div>
                </div>
                <div className="card-container" onClick={() => navigate('/Discussion')}>
                    <div className="card" style={{ backgroundImage: 'url(public/Images/discussion.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="card-label">Discussions</div>
                </div>
                <div className="card-container" onClick={() => navigate('/Inventory')}>
                    <div className="card" style={{ backgroundImage: 'url(public/Images/inventoryNew.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="card-label">Inventory</div>
                </div>
                <div className="card-container" onClick={() => navigate('/Templates')}>
                    <div className="card" style={{ backgroundImage: 'url(public/Images/templateNew.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="card-label">Templates</div>
                </div>
                <div className="card-container" onClick={() => navigate('/Complaints')}>
                    <div className="card" style={{ backgroundImage: 'url(public/Images/complainNew.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="card-label">Complaints</div>
                </div>
                {/* <div className="card-container" onClick={() => navigate('/MyProfile')}>
                    <div className="card" style={{ backgroundImage: 'url(public/Images/profile.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="card-label">My Profile</div>
                </div> */}
            </div>
        </>
    );
}

export default Dashboard;
