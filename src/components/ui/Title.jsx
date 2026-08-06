
const Title = ({
  title = "Unlock Your Potential",
  subtitle = null
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
      <h1
        className="font-league-spartan font-bold text-5xl md:text-6xl lg:text-[74px] leading-tight tracking-tight mb-4 text-white"
      >
        {title}
      </h1>
      {subtitle && (
        <p className="font-league-spartan font-normal text-lg md:text-xl lg:text-2xl text-white/90 max-w-6xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
export default Title
