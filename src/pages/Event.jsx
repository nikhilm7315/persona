import { useState, useEffect, useRef } from 'react'
import { EVENTS_LIST } from '../data/eventsData'
import EventQueueCard from '../components/Events/EventQueueCard'
import EventDetailsPanel from '../components/Events/EventDetailsPanel'
import ImageSlideshow from '@/components/Events/ImageSlideshow/ImageSlideShow'

function Events() {
    const [activeCardIndex, setActiveCardIndex] = useState(0)
    const cardRefs = useRef([])

    useEffect(() => {
        const handleScroll = () => {
            const viewportCenter = window.innerHeight / 2

            cardRefs.current.forEach((card, index) => {
                if (card) {
                    const rect = card.getBoundingClientRect()
                    const cardCenter = rect.top + rect.height / 2
                    const distanceFromCenter = Math.abs(cardCenter - viewportCenter)

                    // Card is closest to center
                    if (distanceFromCenter < rect.height / 2) {
                        setActiveCardIndex(index)
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial check

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Get timeline for the active event
    const activeEvent = EVENTS_LIST[activeCardIndex]
    const timelineEvents = activeEvent?.timeline || []

    return (
        <div className="min-h-screen text-white py-5 px-4 md:px-8">
            {/* Header Details */}
            <div className="mb-16 text-center max-w-6xl mx-auto ">
                <span className="text-[9px] font-light tracking-[0.2em] text-white/30 uppercase font-poppins block mb-2">
                    Event Showcase
                </span>
                <h1 className="text-3xl font-light font-league-spartan text-white/90 tracking-tight leading-none mb-1">
                    Never Ending Events
                </h1>
                <p className="text-[11px] font-light font-poppins text-white/40 leading-relaxed max-w-s m-auto">
                    Explore the milestones, workshops, and gatherings that define our community.
                </p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* Left Side: Queue of Cards */}
                <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-8 items-center lg:items-start">


                    {/* Card Queue with Scroll Snap */}
                    <div className="flex flex-col gap-50 pb-26 mb-25 mt-10 w-full items-center lg:items-start snap-y snap-proximity">
                        {EVENTS_LIST.map((event, index) => (
                            <div
                                key={event.id}
                                ref={el => cardRefs.current[index] = el}
                                className="snap-center w-full flex justify-center lg:justify-start"
                            >
                                <EventQueueCard {...event} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Event Details Panel (Hidden on mobile/tablet) */}
                <div className="hidden lg:block lg:col-span-7 xl:col-span-7 lg:sticky lg:top-24 h-[calc(100vh-8rem)] p-6 overflow-hidden">
                    <EventDetailsPanel
                        event={activeEvent}
                        timeline={timelineEvents}
                    />
                </div>
                
            </div>
            <ImageSlideshow />
        </div>
    )
}

export default Events


