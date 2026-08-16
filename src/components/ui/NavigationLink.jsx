import { NavLink } from 'react-router-dom'

function NavigationLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center font-league-spartan font-medium text-lg text-white hover:text-white/80 transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-90 hover:opacity-100'
        }`
      }
    >
      <span>{label}</span>
    </NavLink>
  )
}

export default NavigationLink