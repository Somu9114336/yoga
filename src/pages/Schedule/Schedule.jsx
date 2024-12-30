import React from 'react';
import './Schedule.css'; 
function Schedule() {
  const yogaSchedule = [
    {
      day: 'Monday',
      classes: [
        { name: 'Hatha Yoga', time: '7:00 AM - 8:00 AM' },
        { name: 'Vinyasa Flow', time: '10:00 AM - 11:00 AM' },
        { name: 'Restorative Yoga', time: '5:00 PM - 6:00 PM' },
      ],
    },
    {
      day: 'Tuesday',
      classes: [
        { name: 'Power Yoga', time: '7:00 AM - 8:00 AM' },
        { name: 'Yin Yoga', time: '10:00 AM - 11:00 AM' },
        { name: 'Meditation', time: '6:00 PM - 7:00 PM' },
      ],
    },
    {
      day: 'Wednesday',
      classes: [
        { name: 'Hatha Yoga', time: '7:00 AM - 8:00 AM' },
        { name: 'Vinyasa Flow', time: '10:00 AM - 11:00 AM' },
        { name: 'Restorative Yoga', time: '5:00 PM - 6:00 PM' },
      ],
    },
    {
      day: 'Thursday',
      classes: [
        { name: 'Power Yoga', time: '7:00 AM - 8:00 AM' },
        { name: 'Yin Yoga', time: '10:00 AM - 11:00 AM' },
        { name: 'Meditation', time: '6:00 PM - 7:00 PM' },
      ],
    },
    {
      day: 'Friday',
      classes: [
        { name: 'Hatha Yoga', time: '7:00 AM - 8:00 AM' },
        { name: 'Vinyasa Flow', time: '10:00 AM - 11:00 AM' },
        { name: 'Restorative Yoga', time: '5:00 PM - 6:00 PM' },
      ],
    },
    {
      day: 'Saturday',
      classes: [
        { name: 'Hatha Yoga', time: '9:00 AM - 10:00 AM' },
        { name: 'Vinyasa Flow', time: '11:00 AM - 12:00 PM' },
        { name: 'Restorative Yoga', time: '5:00 PM - 6:00 PM' },
      ],
    },
    {
      day: 'Sunday',
      classes: [
        { name: 'Power Yoga', time: '8:00 AM - 9:00 AM' },
        { name: 'Yin Yoga', time: '10:00 AM - 11:00 AM' },
        { name: 'Meditation', time: '5:00 PM - 6:00 PM' },
      ],
    },
  ];

  return (
    <div className="schedule-container">
      <h2>Yoga Class Schedule</h2>
      <div className="schedule">
        {/* Loop through each day and render the classes */}
        {yogaSchedule.map((schedule, index) => (
          <div key={index} className="schedule-day">
            <h3>{schedule.day}</h3>
            {schedule.classes.map((yogaClass, idx) => (
              <div key={idx} className="class-info">
                <p><strong>{yogaClass.name}</strong></p>
                <p><strong>Time:</strong> {yogaClass.time}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
