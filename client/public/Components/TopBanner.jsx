import React from 'react';
import gov_logo from '../Images/gov_logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

const TopBanner = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    navigate('/');
  };

  return (
    <>
      <div className="top-banner">
        <img className="gov-logo" src={gov_logo} alt="Logo" width={150} />
        <div className="ban-text" style={{ textAlign: 'center' }}>
          <h2>SAHAKAR</h2>
          <h3>Connecting Departments, Empowering Progress</h3>
        </div>
        {/* Conditionally render buttons based on the current path */}
        {location.pathname === '/' ? (
          <button id="empty-but" style={{ backgroundColor: 'white', width: '160px', height: '40px', border: 'none' }}></button>
        ) : (
          <button onClick={handleLogOut} id="logout-but">LogOut</button>
        )}
      </div>
      <div className="notice-bar">
        Update: We are thrilled to announce the upcoming launch of our new Interdepartmental Collaboration Portal, designed to enhance collaboration across departments.
      </div>
    </>
  );
};

export default TopBanner;
