import Title from '../common/Title'
import MembersCard from '../common/MembersCard'
import { TEAM_MEMBERS } from '../../data/teamData'

function TeamSection() {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <Title title="Meet Our Team" />
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 pt-4 pb-8">
        {TEAM_MEMBERS.map((member, index) => (
          <MembersCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            bgImage={member.bgImage}
            isLead={member.isLead}
            rotationClass={member.rotationClass}
            imgClass={member.imgClass}
          />
        ))}
      </div>
      <a
        href="/team"
        className="font-league-spartan font-medium text-white/80 hover:text-white transition-colors text-base flex items-center gap-2"
      >
        View whole team &rarr;
      </a>
    </div>
  )
}

export default TeamSection
