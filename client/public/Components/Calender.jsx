import React, { useState } from 'react';
import Modal from './Modal'; // Assuming Modal component is imported

const Calendar = () => {
  const initialMeetings = {
    "2024-09-16": [{ time: "10:00 AM", title: "Meeting with the department manager" }],
    "2024-09-17": [{ time: "1:00 PM", title: "Project Review" }],
    "2024-09-19": [{ time: "9:00 AM", title: "Preparation for the project" }],
    "2024-10-05": [{ time: "11:00 AM", title: "Bla bla bla ..." }],
    "2024-10-12": [{ time: "3:00 PM", title: "Deciding the next steps" }],
    "2024-11-02": [{ time: "10:00 AM", title: "Client Presentation" }],
  };

  const [meetings, setMeetings] = useState(initialMeetings);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [newTask, setNewTask] = useState({ time: '', title: '', details: '' });
  const [selectedDate, setSelectedDate] = useState('');
  const today = new Date();

  const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

  const months = Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('default', { month: 'long' }));
  const years = Array.from({ length: 111 }, (_, i) => 1990 + i); // Year range from 1990 to 2100

  // Generate time options for every 15 minutes in 12-hour format with AM/PM
  const timeOptions = [];
  for (let i = 0; i < 24; i++) {
    const hour = i % 12 === 0 ? 12 : i % 12;
    const period = i < 12 ? 'AM' : 'PM';
    for (let j = 0; j < 60; j += 15) {
      const minute = j.toString().padStart(2, '0');
      timeOptions.push(`${hour}:${minute} ${period}`);
    }
  }

  const generateDays = () => {
    let days = [];
    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      let dateStr = `${currentMonth.getFullYear()}-${(currentMonth.getMonth() + 1)
        .toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
      days.push({
        date: dateStr,
        meetings: meetings[dateStr] || [],
      });
    }
    return days;
  };

  const handleMonthChange = (e) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), e.target.value, 1));
  };

  const handleYearChange = (e) => {
    setCurrentMonth(new Date(e.target.value, currentMonth.getMonth(), 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleCellClick = (date) => {
    setSelectedDate(date);
    setModalContent({ title: `Add Task on ${date}`, content: renderTaskForm() });
    setModalOpen(true);
  };

  const renderTaskForm = () => (
    <form onSubmit={handleAddTask}>
      <label className="block mb-1 text-sm font-semibold">Time</label>
      <select
        value={newTask.time}
        onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
        className="border p-2 mb-2 w-full rounded"
        required
      >
        <option value="">Select Time</option>
        {timeOptions.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label className="block mb-1 text-sm font-semibold">Task Title</label>
      <input
        type="text"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        className="border p-2 mb-2 w-full rounded"
        placeholder="Enter task title"
        required
      />

      <label className="block mb-1 text-sm font-semibold">Task Details</label>
      <textarea
        value={newTask.details}
        onChange={(e) => setNewTask({ ...newTask, details: e.target.value })}
        className="border p-2 mb-2 w-full rounded"
        placeholder="Enter task details"
        rows="3"
        required
      />
      
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded w-full">
        Add Task
      </button>
    </form>
  );

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!selectedDate) return;

    setMeetings((prevMeetings) => {
      const updatedMeetings = { ...prevMeetings };
      if (!updatedMeetings[selectedDate]) {
        updatedMeetings[selectedDate] = [];
      }
      updatedMeetings[selectedDate].push(newTask);
      return updatedMeetings;
    });

    setNewTask({ time: '', title: '', details: '' });
    setModalOpen(false);
  };

  const renderDays = () => {
    const daysInPrevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getDate();
    const startDayOfWeek = startOfMonth.getDay();
    let days = [];

    // Fill in days from the previous month
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="border p-2 h-20 flex items-center justify-center relative text-gray-400">
          <div className="absolute top-0 right-0 p-1 text-xs rounded-full">
            {daysInPrevMonth - i}
          </div>
        </div>
      );
    }

    // Fill in days of the current month
    generateDays().forEach((day, index) => {
      const dayDate = new Date(day.date);
      const isPast = dayDate < today;
      const hasMeetings = day.meetings.length > 0;

      days.push(
        <div
          key={index}
          className={`border p-2 relative h-20 flex flex-col justify-between cursor-pointer overflow-hidden ${hasMeetings ? (isPast ? 'bg-green-300' : 'bg-orange-300') : 'bg-transparent'}`}
          onClick={() => handleCellClick(day.date)}
        >
          <div className="absolute top-0 right-0 p-1 text-xs">
            {new Date(day.date).getDate()}
          </div>
          {hasMeetings && (
            <>
              <div className={`p-1 text-xs truncate ${isPast ? 'bg-green-300 text-white' : 'bg-orange-300 text-white'} flex-1`}>
                {day.meetings[0].title}
              </div>
              {isPast && hasMeetings && (
                <span className="text-xs font-semibold text-green-700 mt-1">Done</span>
              )}
            </>
          )}
        </div>
      );
    });

    // Fill in days from the next month
    const daysInNextMonth = 42 - days.length;
    for (let i = 1; i <= daysInNextMonth; i++) {
      days.push(
        <div key={`next-${i}`} className="border p-2 h-20 flex items-center justify-center relative text-gray-400">
          <div className="absolute top-0 right-0 p-1 text-xs rounded-full">
            {i}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="flex p-4 space-x-4">
      {/* Calendar Side */}
      <div className="w-1/2 border p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4 space-x-2">
          <button onClick={prevMonth} className="bg-blue-500 text-white px-3 py-1 rounded">
            Previous
          </button>

          {/* Month Selector */}
          <select value={currentMonth.getMonth()} onChange={handleMonthChange} className="border p-2 rounded">
            {months.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>

          {/* Year Selector */}
          <select value={currentMonth.getFullYear()} onChange={handleYearChange} className="border p-2 rounded">
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <button onClick={nextMonth} className="bg-blue-500 text-white px-3 py-1 rounded">
            Next
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-semibold text-sm">{day}</div>
          ))}
          {renderDays()}
        </div>
      </div>

      {/* Task List Side */}
      <div className="w-1/2 border p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-4">Scheduled Meetings</h2>
        <div>
          {Object.keys(meetings).map((date, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold text-sm">{date}</h3>
              {meetings[date].map((meeting, idx) => (
                <div key={idx} className="text-xs p-1 bg-gray-200 rounded mt-1">
                  <span className="block font-bold">{meeting.time}</span>
                  <span>{meeting.title}</span>
                  <p className="text-xs">{meeting.details}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </div>
  );
};

export default Calendar;
