import React, { useEffect, useRef, useState } from "react";
import "./Timeline.css";

const events = [
  { date: "Sept. 15, 2024", title: "Notice of Intent to Compete", description: "Non-binding, but a hard deadline to order test flight motor(s) and certification flight motor(s)" },
  { date: "Before Build Start", title: "Draft of Designs (specs & sim)", description: "Due before you start to build" },
  { date: "Jan. 31, 2025", title: "Team Registration Fee Due", description: "Pay registration fee and for motors now too" },
  { date: "Jan. 31, 2025", title: "All States’ Judges Identified", description: "" },
  { date: "Feb. 10, 2025", title: "Declaration of Competition Attendance", description: "" },
  { date: "Feb. 10, 2025", title: "Draft of Designs (specs & sim) Last Date", description: "Last possible date to get credit for Draft of Designs" },
  { date: "March 10, 2025", title: "Preliminary Design Report (PDR)", description: "PDR along with Model Rocket Flights documentation", current: true },
  { date: "April 15, 2025", title: "Test Flights Completed", description: "Recommended to do these in March or early April" },
  { date: "May 5, 2025", title: "Flight Readiness Report (FRR)", description: "FRR along with Educational Outreach form" },
  { date: "May 17-18, 2025", title: "Competition", description: "Includes Oral FRR; weather delay date: 5/19" },
  { date: "June 2, 2025", title: "Post-Competition Flight Performance Report (PCFPR)", description: "" },
  { date: "June 16, 2025", title: "Competition Results Announced", description: "" }
];

export default function Timeline({ showCurrent }: { showCurrent: boolean }) {
  const timelineContainerRef = useRef<HTMLDivElement | null>(null);
  const currentEventIndex = events.findIndex(event => event.current);
  const [currentScroll, setCurrentScroll] = useState(0);
  let hasCurrentEvent = false;

  useEffect(() => {
    timelineContainerRef.current?.scrollTo(currentScroll, 0);
  }, [showCurrent]);

  useEffect(() => {
    const container = timelineContainerRef.current;
    if (container) {
      const eventNodes = Array.from(container.querySelectorAll('.timeline-event'));

      eventNodes.forEach((eventNode, index) => {
        setTimeout(() => {
          eventNode.classList.add('animate_line');

          setTimeout(() => {
            if (index < currentEventIndex) {
              eventNode.classList.add('animate_dot');
            }
          }, 250);  
        }, 510 * index);
      })
      
      setTimeout(() => {
        eventNodes[currentEventIndex].classList.add('current-dot');
      }, (510 * currentEventIndex)+250);

      // Scroll to center current event
      const currentEvent = eventNodes[currentEventIndex] as HTMLElement;
      if (currentEvent && timelineContainerRef.current) {
        const container = timelineContainerRef.current;
        const containerWidth = container.clientWidth;
        const eventOffset = currentEvent.offsetLeft + currentEvent.clientWidth / 2;
        const scrollTo = eventOffset - containerWidth / 2;
        setCurrentScroll(scrollTo);

        container.scrollLeft = scrollTo;
    }
    }
  }, [currentEventIndex]);

  useEffect(() => {
    const container = timelineContainerRef.current;
    if (container) {
      container.addEventListener("wheel", (event) => {
        container.scrollLeft += event.deltaY;
        event.preventDefault();
      });
    }
  }, []);

  return (
    <div className="timeline-container" ref={timelineContainerRef}>
        {events.map((event, index) => {
          // Set hasCurrentEvent flag for the first current event
          if (event.current && !hasCurrentEvent) {
            hasCurrentEvent = true;
          }

          return (
            <div
              key={index}
              className={`timeline-event ${event.current ? "current-event" : ""} ${!hasCurrentEvent ? "past-event" : ""}`}
              style={{ display: 'inline-block' }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-date">{event.date}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
