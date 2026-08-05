import VerticalTimeline from '../components/Events/VerticalTimeline'
import Title from '../components/ui/Title'


const verticalEvents = [
    {
        year: '2024',
        month: 'APR',
        tag: 'Launch',
        title: 'First Community Meetup',
        body: 'We opened the doors to our first student-led gathering with talks, networking, and exciting conversations.',
        img: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300" viewBox="0 0 600 300"><rect width="600" height="300" fill="%230F0F1D"/><circle cx="300" cy="140" r="90" fill="%23A28AE5"/><rect x="160" y="60" width="280" height="24" rx="12" fill="%23ffffff" fill-opacity="0.85"/><rect x="190" y="104" width="220" height="16" rx="8" fill="%23ffffff" fill-opacity="0.65"/></svg>',
    },
    {
        year: '2025',
        month: 'SEP',
        tag: 'Growth',
        title: 'Tech Talk Series',
        body: 'The community expanded with hands-on sessions covering modern tools, career development, and collaboration.',
        img: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300" viewBox="0 0 600 300"><rect width="600" height="300" fill="%23161028"/><rect x="120" y="90" width="360" height="120" rx="24" fill="%23ffffff" fill-opacity="0.12" stroke="%23A28AE5" stroke-width="3"/><rect x="170" y="122" width="140" height="18" rx="9" fill="%23A28AE5"/><rect x="170" y="154" width="220" height="16" rx="8" fill="%23ffffff" fill-opacity="0.7"/></svg>',
    },
    {
        year: '2026',
        month: 'AUG',
        tag: 'Now',
        title: 'Upcoming Events',
        body: 'We are preparing a fresh set of events to keep the community inspired, connected, and actively growing.',
        img: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300" viewBox="0 0 600 300"><rect width="600" height="300" fill="%2307050F"/><rect x="120" y="78" width="360" height="144" rx="24" fill="%23ffffff" fill-opacity="0.1" stroke="%23ffffff" stroke-opacity="0.25" stroke-width="3"/><circle cx="300" cy="150" r="54" fill="%23A28AE5"/><rect x="220" y="144" width="160" height="16" rx="8" fill="%23ffffff" fill-opacity="0.75"/></svg>',
    },
]

function Events() {
    return (
        <div className="min-h-screen flex flex-col bg-[#161028]/95] text-white">
            <Title title = "Never Ending Events !" subtitle= "Events that spark ideas, build skills, and boost confidence—empowering students to think, connect, and express." ></Title>
            <VerticalTimeline events={verticalEvents} />
        </div>
    )
}

export default Events

