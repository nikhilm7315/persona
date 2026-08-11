import { NavLink } from 'react-router-dom'

function NavigationLink({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 font-league-spartan font-medium text-lg text-white hover:text-white/80 transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-90 hover:opacity-100'
        }`
      }
    >
      <img src={icon} alt="" className="w-5 h-5 object-contain" aria-hidden="true" />
      <span>{label}</span>
    </NavLink>
  )
}

export default NavigationLink