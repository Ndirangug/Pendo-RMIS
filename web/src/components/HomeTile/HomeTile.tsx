import { Card, Box } from '@mui/material'
import { Link } from '@redwoodjs/router'

const HomeTile = ({ label, route, icon }) => {
  return (
    <>
      <Link to={route}>
        <Card
          elevation={6}
          sx={{
            width: '10vw',
            height: '10vw',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '1em',
          }}
        >
          <Box> {icon}</Box>
          <p className="text-sm mt-2 text-center">{label}</p>
        </Card>
      </Link>
    </>
  )
}

export default HomeTile
