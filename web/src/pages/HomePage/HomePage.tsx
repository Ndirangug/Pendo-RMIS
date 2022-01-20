import { Box, Container, Stack } from '@mui/material'
import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import HomeTile from 'src/components/HomeTile/HomeTile'
import UserInfoTile from 'src/components/UserInfoTile/UserInfoTile'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Box>
        <div className="user-info">
          <UserInfoTile user="George" />
        </div>

        <Container>
          <h1>Pendo Refugee Camp</h1>
          <Stack direction="row" spacing={3}>
            <HomeTile
              label="Register Refugee"
              route={routes.resetPassword}
              icon=""
            />

            <HomeTile
              label="View Refugee"
              route={routes.resetPassword}
              icon=""
            />

            <HomeTile label="Funds" route={routes.resetPassword} icon="" />

            <HomeTile label="Events" route={routes.resetPassword} icon="" />
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default HomePage
