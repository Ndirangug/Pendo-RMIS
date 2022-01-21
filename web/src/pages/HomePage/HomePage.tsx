import { Box, Container, Stack, Button } from '@mui/material'
import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import HomeTile from 'src/components/HomeTile/HomeTile'
import UserInfoTile from 'src/components/UserInfoTile/UserInfoTile'
import { useAuth } from '@redwoodjs/auth'

// import CurvedBg from '../../../public/res/svgs/home_bg.svg'

const HomePage = () => {
  const { logOut } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Box>
        {/* <Box //TODO find another background
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <CurvedBg width={'100vw'} />
        </Box> */}
        <Box>
          <div className="user-info">
            <UserInfoTile user="George" />
            <Button
              onClick={() => {
                logOut()
              }}
            >
              Logout
            </Button>
          </div>

          <Container>
            <h1 className="text-center">Pendo Refugee Camp</h1>
            <Stack direction="row" spacing={3}>
              <HomeTile
                label="Register Refugee"
                route={routes.newRefugee()}
                icon=""
              />

              <HomeTile
                label="View Refugee"
                route={routes.allRefugees()}
                icon=""
              />

              <HomeTile label="Funds" route={routes.funds()} icon="" />

              <HomeTile label="Events" route={routes.events()} icon="" />
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default HomePage
