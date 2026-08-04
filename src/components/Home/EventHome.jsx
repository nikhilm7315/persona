import Title from '../common/Title'
import arrowDark from '../../assets/icons/arrowdark.svg'
import arrowLight from '../../assets/icons/arrowlight.svg'
import { EVENTS_LIST } from '../../data/eventsData'

// Local helper component
function EventTeaserCard({ title, heading, description, image, src, isDark, href = '/events' }) {
  const arrowIcon = isDark ? arrowDark : arrowLight
  const displayTitle = title || heading
  const displayImage = image || src

  return (
    <div className={`relative rounded-3xl p-6 pt-8 flex flex-col gap-3 ${isDark ? 'bg-persona-purple-dark' : 'bg-[#E8D6FF]'}`}>
      <a
        href={href}
        aria-label={`Learn more about ${displayTitle}`}
        className={`absolute -top-4 -right-4 w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-105 ${
          isDark ? 'bg-[#E8D6FF]' : 'bg-persona-purple-dark'
        }`}
      >
        <img src={arrowIcon} alt="" className="w-5 h-5" aria-hidden="true" />
      </a>

      <h3 className={`font-league-spartan font-semibold text-xl pr-12 ${isDark ? 'text-white' : 'text-persona-navy'}`}>
        {displayTitle}
      </h3>

      <p className={`font-poppins text-sm leading-relaxed ${isDark ? 'text-white/90' : 'text-persona-navy/80'} line-clamp-3`}>
        {description}
      </p>

      <img src={displayImage} alt={displayTitle} className="w-full h-40 object-cover rounded-2xl mt-2" />
    </div>
  )
}

function EventHome() {
  return (
    <section className="my-24 px-4">
      <Title title="Never Ending Events !" subtitle={null} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {EVENTS_LIST.map((event, index) => (
          <EventTeaserCard key={event.id || index} {...event} isDark={index % 2 === 0} />
        ))}
      </div>
    </section>
  )
}

export default EventHome