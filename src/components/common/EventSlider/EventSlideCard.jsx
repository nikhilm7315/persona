import EventImage from './EventImage'
import EventDetails from './EventDetails'

/**
 * Modular EventSlideCard component uniting EventImage and EventDetails
 * in a responsive glassmorphic card container.
 */
function EventSlideCard({ event, placeholderImage, onRegister }) {
  if (!event) return null

  const {
    title,
    heading,
    description,
    body,
    date,
    buttonText,
    registerHref,
    image,
    src,
    img,
    imagePosition,
    objectFit,
  } = event

  return (
    <div
      className="w-full bg-[#261B40]/90 backdrop-blur-md rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch shadow-[0_0_28px_rgba(95,67,178,0.49)] relative transition-all duration-300"
      style={{
        border: '1px solid transparent',
        backgroundImage:
          'linear-gradient(#261B40, #261B40), linear-gradient(90deg, #3A3153 0%, #5F43B2 49.32%, #3A3153 66%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      {/* Left Side - Event Image Container */}
      <div className="w-full md:w-1/2 relative min-h-[260px] md:min-h-[360px] flex-shrink-0">
        <EventImage
          src={src}
          image={image}
          img={img}
          alt={title || heading || 'Event'}
          placeholderImage={placeholderImage}
          imagePosition={imagePosition}
          objectFit={objectFit}
          className="rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
        />
      </div>

      {/* Right Side - Details & Content */}
      <EventDetails
        title={title}
        heading={heading}
        description={description || body}
        date={date}
        buttonText={buttonText}
        registerHref={registerHref}
        onRegister={onRegister}
      />
    </div>
  )
}

export default EventSlideCard
