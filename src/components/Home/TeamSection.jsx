import { Link } from 'react-router-dom'
import Title from '../ui/Title'
import MembersCard from '../ui/MembersCard'
import { TEAM_MEMBERS } from '../../data/teamData'

function TeamSection() {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <Title title="Meet Our Team" />

      {/* Horizontal Swipable Slider on Mobile (< md), Centered Flex Grid on Desktop (>= md) */}
      <div className="w-full overflow-x-auto md:overflow-visible scrollbar-none px-4 sm:px-6">
        <div className="flex md:flex-wrap md:justify-center items-center gap-6 sm:gap-8 pt-4 pb-8 w-max md:w-full max-md:mx-auto snap-x snap-mandatory">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="snap-center shrink-0">
              <MembersCard
                name={member.name}
                role={member.role}
                image={member.image}
                bgImage={member.bgImage}
                isLead={member.isLead}
                rotationClass={member.rotationClass}
                imgClass={member.imgClass}
              />
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/team"
        className="font-league-spartan font-medium text-white/80 hover:text-white transition-colors text-base flex items-center gap-2"
      >
        View whole team &rarr;
      </Link>
    </div>
  )
}

export default TeamSection
