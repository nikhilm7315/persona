
const Title = ({
  title = "Unlock Your Potential",
  subtitle = null
}) => {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(181.06deg, rgba(155, 93, 232, 0.8) -42.76%, rgba(95, 67, 178, 0.49) 118.24%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
  }

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
      <h1
        className="font-league-spartan font-bold text-5xl md:text-6xl lg:text-[74px] leading-tight tracking-tight mb-4"
        style={gradientStyle}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="font-league-spartan font-normal text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
export default Title
