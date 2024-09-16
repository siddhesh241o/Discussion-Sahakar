import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const Navigate = useNavigate();
  return <>
  <h1>DashBoard</h1>
  <div className="cards-list">
    <div className="card">
        <h2>GIS</h2>
        <button onClick={()=>{Navigate('/GIS')}}>Enter</button>
    </div>
    <div className="card">
        <h2>GEO Tagging</h2>
        <button onClick={()=>{Navigate('/Geotagging')}}>Enter</button>
    </div>
    <div className="card">
        <h2>Meeting</h2>
        <button onClick={()=>{Navigate('/Meeting')}}>Enter</button>
    </div>
    <div className="card">
        <h2>My Profile</h2>
        <button onClick={()=>{Navigate('/MyProfile')}}>Enter</button>
    </div>
    <div className="card">
        <h2>Inventory</h2>
        <button onClick={()=>{Navigate('/Inventory')}}>Enter</button>
    </div>
    <div className="card">
        <h2>Complaints</h2>
        <button onClick={()=>{Navigate('/Complaints')}}>Enter</button>
    </div>
    <div className="card">
        <h2>Projects Directory</h2>
        <button onClick={()=>{Navigate('/Projects')}}>Enter</button>
    </div>
    <div className="card">
        <h2>TaskManager</h2>
        <button onClick={()=>{Navigate('/Taskmanager')}}>Enter</button>
    </div>
    <div className="card">
        <h2>Templates</h2>
        <button onClick={()=>{Navigate('/Templates')}}>Enter</button>
    </div>
    <div className="card">
        <h2>Seminars and Workshops</h2>
        <button onClick={()=>{Navigate('/Seminar')}}>Enter</button>
    </div>
  </div>
  </>
}

export default Dashboard;