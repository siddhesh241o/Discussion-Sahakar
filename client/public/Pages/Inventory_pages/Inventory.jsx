import React from 'react'
import { useNavigate } from 'react-router-dom'
const Inventory = () => {
  const Navigate = useNavigate();
  return <>
    <h1>INVENTORY</h1>
    
    <div className="cards-list">
        <div className="card">
            <h2>My Inventory</h2>
            <button onClick={()=>{Navigate('/MyInventory')}}>ENTER</button>
        </div>
        <div className="card">
            <h2>Request For Resources</h2>
            <button onClick={()=>{Navigate('/Out_req')}}>Enter</button>
        </div>
        <div className="card">
            <h2>Received Requests</h2>
            <button onClick={()=>{Navigate('/Inc_req')}}>enter</button>
        </div>

    </div>
  
  </>
}

export default Inventory