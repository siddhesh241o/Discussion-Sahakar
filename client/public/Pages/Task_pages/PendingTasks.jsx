import React from 'react'
import { useNavigate } from 'react-router-dom'
const PendingTasks = () => {
    const Navigate = useNavigate();
  return<>
  
    <h1>Pending Tasks</h1>
    <div className="cards-list">
    <div className="card">
            <h1>Task 1</h1>
            <button onClick={()=>{Navigate('/Task/one')}}>Enter</button>
        </div>
        <div className="card">
            <h1>Task 2</h1>
            <button onClick={()=>{Navigate('/Task/two')}}>Enter</button>
        </div>
        <div className="card">
            <h1>Task 3</h1>
            <button onClick={()=>{Navigate('/Task/Three')}}>Enter</button>
        </div>
        <div className="card">
            <h1>Task 4</h1>
            <button onClick={()=>{Navigate('/Task/four')}}>Enter</button>
        </div>
    </div>
  </>
}

export default PendingTasks