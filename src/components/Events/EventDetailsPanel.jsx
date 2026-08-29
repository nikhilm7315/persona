import { useState, useEffect } from 'react'

function TimelineCard({ event, isActive, onHover, onClick }) {
  return (
    <div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onClick}
      className={`
        w-full py-2.5 px-2.5 rounded-lg cursor-pointer
        transition-all duration-300
        ${isActive ? 'opacity-100 bg-white/10 pl-3 border-l-2 border-[#00b4d8]' : 'opacity-50 hover:opacity-85 hover:bg-white/[0.03]'}
      `}
    >
      {/* Date */}
      <div className="mb-0.5">
        <span className="text-[12px] font-light text-white/40 font-poppins">
          {event.month} {event.year}
        </span>
      </div>

      {/* Title */}
      <h4 className="text-[14px] font-light font-league-spartan text-white/90 leading-tight">
        {event.title}
      </h4>
    </div>
  )
}

function EventDetailsPanel({ event, timeline = [] }) {
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Reset selected timeline sub-item when main event changes
  useEffect(() => {
    setSelectedTimelineIndex(null)
    setHoveredIndex(null)
  }, [event?.id])

  if (!event) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-white/40 font-poppins text-[14px]">Select an event</p>
      </div>
    )
  }

  const activeIndex = hoveredIndex !== null ? hoveredIndex : selectedTimelineIndex
  const activeTimelineItem = activeIndex !== null ? timeline[activeIndex] : null

  return (
    <div
      key={event.id}
      className="h-full flex gap-4 md:gap-5 lg:gap-8 transition-opacity duration-300 opacity-100"
    >
      {/* Left Side: Event Description */}
      <div className="flex-1 flex flex-col gap-3 md:gap-4 pr-3 md:pr-4 lg:pr-6 overflow-y-auto custom-scrollbar">
        {/* Event Title */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-light font-league-spartan text-white/90 tracking-tight leading-tight">
            {activeTimelineItem ? activeTimelineItem.title : event.title}
          </h2>
          {activeTimelineItem && (
            <span className="inline-block mt-1.5 md:mt-2 text-xs px-2.5 py-0.5 rounded-full bg-[#00b4d8]/20 text-[#00b4d8] font-poppins border border-[#00b4d8]/30">
              {activeTimelineItem.month} {activeTimelineItem.year} • {activeTimelineItem.tag || 'Milestone'}
            </span>
          )}
        </div>

        {/* Description */}
        <div className="flex-1">
          <p className="text-[13px] md:text-[14px] font-light font-poppins text-white/60 leading-relaxed whitespace-pre-line">
            {activeTimelineItem ? activeTimelineItem.body : event.description}
          </p>
        </div>
      </div>

      {/* Right Side: Timeline Queue */}
      {timeline.length > 0 && (
        <div className="w-32 sm:w-36 md:w-36 lg:w-44 flex flex-col gap-2 md:gap-3 border-l border-white/10 pl-3 md:pl-4">
          <div>
            <h3 className="text-[12px] md:text-[14px] font-light tracking-wide text-white/40 uppercase font-poppins mb-1 md:mb-2">
              History
            </h3>
          </div>

          {/* Scrollable Timeline Cards */}
          <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar pr-1 gap-1">
            {timeline.map((timelineEvent, index) => (
              <TimelineCard
                key={`${timelineEvent.title}-${index}`}
                event={timelineEvent}
                isActive={activeIndex === index}
                onHover={(isHovered) => setHoveredIndex(isHovered ? index : null)}
                onClick={() => setSelectedTimelineIndex(prev => prev === index ? null : index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default EventDetailsPanel
