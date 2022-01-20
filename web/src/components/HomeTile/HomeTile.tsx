import { Button } from '@mui/material'
import { Link } from '@redwoodjs/router'

const HomeTile = ({ label, route, icon }) => {
  return (
    <div className="bg-green-50 text-3xl font-bold underline">
      <Link className="bg-green-50 text-3xl font-bold underline" to={route}>
        {label}
      </Link>
      <h3>{icon}</h3>
    </div>
  )
}

export default HomeTile
