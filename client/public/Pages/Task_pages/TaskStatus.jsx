import React from 'react';
import { Search, Filter, Plus } from 'lucide-react';

// StatusTaskTable component
const StatusTaskTable = () => {
  const tasks = [
    { id: 'Task ID', name: 'Task Name', date: 'Date', assignedBy: 'Assigned By', department: 'Department', status: 'Status' },
    { id: 'T-12345', name: 'Complete Report', date: '09/15/24', assignedBy: 'Alice Johnson', department: 'Inter-department', status: 'Pending' },
    { id: 'T-12346', name: 'Update Website', date: '09/14/24', assignedBy: 'Bob Smith', department: 'Intra-department', status: 'Pending' },
    { id: 'T-12347', name: 'Design Marketing Materials', date: '09/13/24', assignedBy: 'Charlie Brown', department: 'Inter-department', status: 'Completed' },
    { id: 'T-12348', name: 'Conduct Team Meeting', date: '09/12/24', assignedBy: 'Dana White', department: 'Intra-department', status: 'Requested' },
    { id: 'T-12349', name: 'Prepare Presentation', date: '09/11/24', assignedBy: 'Eva Green', department: 'Intra-department', status: 'Pending' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <div className="bg-white rounded-lg shadow">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-md"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center px-4 py-2 border rounded-md">
              <Filter size={20} className="mr-2" />
              Filters
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md">
              <Plus size={20} className="mr-2" />
              Add Task
            </button>
          </div>
        </div>
        <table className="w-full table-fixed">
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-t">
                <td className="w-1/12 px-4 py-2">{task.id}</td>
                <td className="w-2/12 px-4 py-2">{task.name}</td>
                <td className="w-2/12 px-4 py-2">{task.date}</td>
                <td className="w-2/12 px-4 py-2">{task.assignedBy}</td>
                <td className="w-2/12 px-4 py-2">{task.department}</td>
                <td className="w-1/12 px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    task.status === 'Status' ? '' :
                    task.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {task.status}
                  </span>
                </td>
                <td className="w-2/12 px-4 py-2">
                  {task.status === 'Pending' && (
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Complete Task</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center p-4 border-t">
          <div>
            <button className="px-2 py-1 border rounded-md mr-2">&lt;</button>
            <button className="px-2 py-1 border rounded-md bg-blue-600 text-white mr-2">1</button>
            <button className="px-2 py-1 border rounded-md mr-2">2</button>
            <span className="mr-2">...</span>
            <button className="px-2 py-1 border rounded-md mr-2">7</button>
            <button className="px-2 py-1 border rounded-md mr-2">8</button>
            <button className="px-2 py-1 border rounded-md">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};
const TaskStatus = () => {
  return (
    <div>
      <StatusTaskTable />
    </div>
  );
};

export default TaskStatus;
