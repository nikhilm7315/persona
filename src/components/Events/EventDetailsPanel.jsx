import { useEffect, useState } from 'react'
import Card from './NewParagraph'
function TimelineCard({ event, isActive, onHover }) {
  return (
    <div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className={`
        w-full py-3 cursor-pointer
        transition-all duration-200
        ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-80'}
      `}
    >
      {/* Date */}
      <div className="mb-1">
        <span className="text-[10px] font-light text-white/40 font-poppins">
          {event.month} {event.year}
        </span>
      </div>

      {/* Title */}
      <h4 className="text-xs font-light font-league-spartan text-white/90 leading-tight">
        {event.title}
      </h4>
    </div>
  )
}

function EventDetailsPanel({ event, timeline = [] }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(false)
    const timer = setTimeout(() => setFadeIn(true), 50)
    return () => clearTimeout(timer)
  }, [event])

  if (!event) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-white/40 font-poppins text-xs">Select an event</p>
      </div>
    )
  }

  return (
    <div
      className={`
        h-full flex gap-8 transition-opacity duration-500
        ${fadeIn ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {/* Left Side: Event Description */}
      <div className="flex-1 flex flex-col gap-4 pr-8 overflow-y-auto custom-scrollbar">
        {/* Event Title */}
        <div>
          <h2 className="text-2xl font-light font-league-spartan text-white/90 tracking-tight leading-tight">
            {event.title}
          </h2>
        </div>

        {/* Description */}
        <div className="flex-1">
          <p className="text-xs font-light font-poppins text-white/50 leading-relaxed">
            {event.description}
            {/* <Card description={event.description.substring(0, 100)} /> */}
          </p>
        </div>

      </div>

      {/* Right Side: Timeline Queue */}
      <div className="w-40 flex flex-col gap-3">
        <div>
          <h3 className="text-[10px] font-light tracking-wide text-white/40 uppercase font-poppins mb-4">
            History
          </h3>
        </div>

        {/* Scrollable Timeline Cards */}
        <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar pr-1">
          {timeline.map((timelineEvent, index) => (
            <TimelineCard
              key={index}
              event={timelineEvent}
              isActive={hoveredIndex === index}
              onHover={(active) => setHoveredIndex(active ? index : null)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventDetailsPanel
