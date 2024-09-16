import React from 'react'
import { useNavigate } from 'react-router-dom'
const TaskManager = () => {
    const Navigate = useNavigate();
  return <>
    <h1>Task Manager</h1>
    <p>This component will display the list of tasks and allow users to add, edit, and delete tasks.</p>
    <div className="cards-list">
     <div className="card">
        <h2>Pending Task</h2>
        <button onClick={()=>{Navigate('/PendingTasks')}}>Enter</button>
     </div>
     <div className="card">
        <h2>Task Status</h2>
        <button onClick={()=>{Navigate('/TaskStatus')}}>Enter</button>

     </div>
    </div>
  </>
}

export default TaskManager