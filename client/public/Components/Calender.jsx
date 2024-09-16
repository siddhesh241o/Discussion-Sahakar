import React, { useState, useEffect } from 'react';

const Calendar = () => {
  const dummyMeetings = {
    "2024-09-16": [{ time: "10:00 AM", title: "Meeting with the department manager" }],
    "2024-09-17": [{ time: "1:00 PM", title: "Project Review" }],
    "2024-09-19": [{ time: "9:00 AM", title: "Preparation for the project" }],
    "2024-10-05": [{ time: "11:00 AM", title: "Bla bla bla ..." }],
    "2024-10-12": [{ time: "3:00 PM", title: "Deciding the next steps" }],
    "2024-11-02": [{ time: "10:00 AM", title: "Client Presentation" }],
  };

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date();

  const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

  const generateDays = () => {
    let days = [];
    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      let dateStr = `${currentMonth.getFullYear()}-${(currentMonth.getMonth() + 1)
        .toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
      days.push({
        date: dateStr,
        meetings: dummyMeetings[dateStr] || [],
      });
    }
    return days;
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const renderDays = () => {
    const daysInPrevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getDate();
    const startDayOfWeek = startOfMonth.getDay();

    let days = [];
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      days.push(<div key={`prev-${i}`} className="border p-1 h-20 text-gray-400 text-sm">{daysInPrevMonth - i}</div>);
    }

    generateDays().forEach((day, index) => {
      const dayDate = new Date(day.date);
      const isPast = dayDate < today;

      days.push(
        <div key={index} className={`border p-1 relative h-20 ${isPast ? 'bg-gray-100' : ''}`}>
          <div className="absolute top-0 right-0 p-1 text-xs">
            {new Date(day.date).getDate()}
          </div>
          {day.meetings.map((meeting, i) => (
            <div key={i} className={`p-1 rounded mt-1 text-xs ${isPast ? 'bg-gray-400 text-white' : 'bg-blue-200'}`}>
              <span className="block font-bold">{meeting.time}</span>
              <span>{meeting.title}</span>
              {isPast && <span className="text-xs font-semibold text-red-600 ml-2">Done</span>}
            </div>
          ))}
        </div>
      );
    });

    const daysInNextMonth = 42 - days.length;
    for (let i = 1; i <= daysInNextMonth; i++) {
      days.push(<div key={`next-${i}`} className="border p-1 h-20 text-gray-400 text-sm">{i}</div>);
    }

    return days;
  };

  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-2">
        <button onClick={prevMonth} className="bg-blue-500 text-white px-3 py-1 rounded">
          Previous
        </button>
        <h2 className="text-lg font-bold">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
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
  );
};

export default Calendar;