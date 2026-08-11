function Card({ description }) {
  return (
    <div className="max-w-[300px] rounded-[1.2rem] bg-gradient-to-br from-white/95 via-[#3a4b8a] to-white/60 p-px shadow-[0_1rem_1.5rem_-0.9rem_rgba(0,0,0,0.88)]">
      <div className="rounded-[1.2rem] bg-gradient-to-br from-[#0d1120] via-[#3a4b8a] to-[#0d1120] p-6 text-base text-[#bec4cf]">
        {description}
      </div>
    </div>
  )
}

export default Card
