import React from "react";
import "./Timeline.css";

export const Timeline = ({ events }: { events: { title: string, date: string, description: string }[] }) => {
  return (
    <div className="custom-timeline">
      {events.map((event, index) => (
        <div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="timeline-title">{event.title}</h3>
            <span className="timeline-date">{event.date}</span>
            <p className="timeline-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
