import React from 'react'

const TaskStatus = () => {
  return <>
  
  <h1>Task Status</h1>

  <div className="cards-list">
    <div className="card">
        <h2>Task 1</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="status-buttons">
          <button>In Progress</button>
          <button>Completed</button>
        </div>
      </div>
    <div className="card">
        <h2>Task 2</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="status-buttons">
          <button>Rejected</button>
          <p>remark: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda corrupti iure consequatur fuga hic ullam et earum. Corrupti harum modi sint, expedita et saepe nostrum eaque voluptatibus amet eligendi maxime.</p>
        </div>
      </div>
    <div className="card">
        <h2>Task 3</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="status-buttons">
          <button>Pending</button>
          <button>Completed</button>
        </div>
      </div>
    <div className="card">
        <h2>Task 4</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="status-buttons">
          <button>Approved</button>
          <button>Completed</button>
        </div>
      </div>
    </div>
  
  
  </>
}

export default TaskStatus;