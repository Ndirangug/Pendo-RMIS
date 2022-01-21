import { Link } from '@redwoodjs/router'

const HomeTile = ({ label, route, icon }) => {
  return (
    <div>
      <Link to={route}>{label}</Link>
      <h3>{icon}</h3>
    </div>
  )
}

export default HomeTile
