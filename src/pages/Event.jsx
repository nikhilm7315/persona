import { useState, useEffect, useRef, useCallback } from 'react'
import { EVENTS_LIST } from '../data/eventsData'
import EventQueueCard from '../components/Events/EventQueueCard'
import EventDetailsPanel from '../components/Events/EventDetailsPanel'
import ImageSlideshow from '@/components/Events/ImageSlideshow/ImageSlideShow'

function Events() {
    const [activeCardIndex, setActiveCardIndex] = useState(0)
    const cardRefs = useRef([])
    const isClickScrolling = useRef(false)

    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (isClickScrolling.current) return

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const viewportCenter = window.innerHeight / 2
                    let closestIndex = 0
                    let minDistance = Infinity

                    cardRefs.current.forEach((card, index) => {
                        if (card) {
                            const rect = card.getBoundingClientRect()
                            const cardCenter = rect.top + rect.height / 2
                            const distanceFromCenter = Math.abs(cardCenter - viewportCenter)

                            if (distanceFromCenter < minDistance) {
                                minDistance = distanceFromCenter
                                closestIndex = index
                            }
                        }
                    })

                    setActiveCardIndex(prev => (prev === closestIndex ? prev : closestIndex))
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Initial check

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleCardClick = useCallback((index) => {
        setActiveCardIndex(index)
        const cardEl = cardRefs.current[index]
        if (cardEl) {
            isClickScrolling.current = true
            cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
            setTimeout(() => {
                isClickScrolling.current = false
            }, 600)
        }
    }, [])

    // Get timeline for the active event
    const activeEvent = EVENTS_LIST[activeCardIndex]
    const timelineEvents = activeEvent?.timeline || []

    return (
        <div className="min-h-screen text-white py-5 px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Header Details */}
            <div className="mb-12 md:mb-16 text-center max-w-4xl mx-auto">
                {/* <span className="text-[13px] font-light tracking-[0.2em] text-white/30 uppercase font-poppins block mb-2">
                    Event Showcase
                </span> */}
                <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight mb-4 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                    Never Ending Events
                </h1>
                <p className="text-[14px] md:text-[15px] font-light font-poppins text-white leading-relaxed max-w-lg mx-auto">
                    Explore the milestones, workshops, and gatherings that define our community.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-6 lg:gap-10 xl:gap-12 items-start">
                {/* Left Side: Queue of Cards */}
                <div className="md:col-span-5 lg:col-span-5 xl:col-span-4 flex flex-col items-center md:items-start relative z-0">
                    <div className="flex flex-col gap-20 md:gap-24 lg:gap-36 pb-16 md:pb-20 mt-2 md:mt-4 w-full items-center md:items-start snap-y snap-proximity">
                        {EVENTS_LIST.map((event, index) => (
                            <div
                                key={event.id}
                                ref={el => cardRefs.current[index] = el}
                                className="snap-center w-full flex flex-col items-center md:items-start"
                            >
                                <EventQueueCard
                                    {...event}
                                    isActive={activeCardIndex === index}
                                    onClick={() => handleCardClick(index)}
                                />

                                {/* Mobile-only Details Display (visible below card on phone screens < md) */}
                                <div className="md:hidden w-full max-w-[320px] sm:max-w-[340px] mt-6 bg-white/[0.03] backdrop-blur-md rounded-2xl p-5 border border-white/10">
                                    <h3 className="text-xl font-light font-league-spartan text-white mb-2">
                                        {event.title}
                                    </h3>
                                    <p className="text-xs font-light font-poppins text-white/60 leading-relaxed mb-4">
                                        {event.description}
                                    </p>
                                    {event.timeline && event.timeline.length > 0 && (
                                        <div className="border-t border-white/10 pt-3">
                                            <span className="text-[11px] font-medium tracking-wider text-white/40 uppercase font-poppins block mb-2">
                                                Past Editions ({event.timeline.length})
                                            </span>
                                            <div className="flex flex-col gap-2">
                                                {event.timeline.map((tItem, tIdx) => (
                                                    <div key={tIdx} className="text-xs bg-white/[0.04] p-2.5 rounded-lg">
                                                        <div className="flex justify-between items-center text-[11px] text-[#00b4d8] mb-1 font-poppins">
                                                            <span>{tItem.month} {tItem.year}</span>
                                                            <span className="bg-[#00b4d8]/10 px-1.5 py-0.5 rounded text-[10px]">{tItem.tag}</span>
                                                        </div>
                                                        <div className="font-league-spartan text-white/90 font-medium text-sm">{tItem.title}</div>
                                                        <div className="text-[11px] text-white/50 mt-1 font-poppins">{tItem.body}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Sticky Event Details Panel (Tablet & Desktop) */}
                <div className="hidden md:block md:col-span-7 lg:col-span-7 xl:col-span-8 md:sticky md:top-20 lg:top-24 h-[calc(100vh-6.5rem)] md:h-[calc(100vh-7rem)] lg:h-[calc(100vh-8rem)] p-4 md:p-5 lg:p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl md:rounded-3xl backdrop-blur-sm overflow-hidden">
                    <EventDetailsPanel
                        event={activeEvent}
                        timeline={timelineEvents}
                    />
                </div>
            </div>

            {/* Bottom Image Slideshow ticker */}
            <div className="mt-16 pt-8 border-t border-white/5">
                <ImageSlideshow />
            </div>
        </div>
    )
}

export default Events


