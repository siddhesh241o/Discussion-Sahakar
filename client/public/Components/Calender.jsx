import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component

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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
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

  const handleCellClick = (title, content) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const renderDays = () => {
    const daysInPrevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getDate();
    const startDayOfWeek = startOfMonth.getDay();
    let days = [];

    // Fill in days from the previous month
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      days.push(
        <div
          key={`prev-${i}`}
          className="border p-2 h-20 flex items-center justify-center relative text-gray-400"
        >
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
          onClick={() => {
            const meetingContent = day.meetings.map((meeting, i) => (
              <div key={i} className={`p-1 rounded mt-1 text-xs ${isPast ? 'bg-green-300 text-white' : 'bg-orange-300 text-white'}`}>
                <span className="block font-bold">{meeting.time}</span>
                <span>{meeting.title}</span>
                {isPast && <span className="text-xs font-semibold text-green-700 ml-2">Done</span>}
              </div>
            ));
            handleCellClick(`Meetings on ${day.date}`, meetingContent);
          }}
        >
          <div className="absolute top-0 right-0 p-1 text-xs">
            {new Date(day.date).getDate()}
          </div>
          {hasMeetings && (
            <div className={`p-1 text-xs truncate ${isPast ? 'bg-green-300 text-white' : 'bg-orange-300 text-white'} flex-1`}>
              {day.meetings[0].title}
            </div>
          )}
          {hasMeetings && isPast && <span className="text-xs font-semibold text-green-700 mt-1">Done</span>}
        </div>
      );
    });

    // Fill in days from the next month
    const daysInNextMonth = 42 - days.length;
    for (let i = 1; i <= daysInNextMonth; i++) {
      days.push(
        <div
          key={`next-${i}`}
          className="border p-2 h-20 flex items-center justify-center relative text-gray-400"
        >
          <div className="absolute top-0 right-0 p-1 text-xs rounded-full">
            {i}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
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
