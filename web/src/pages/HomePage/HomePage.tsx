import { Box, Stack } from '@mui/material'
import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import HomeTile from 'src/components/HomeTile/HomeTile'
import UserInfoTile from 'src/components/UserInfoTile/UserInfoTile'

import { PersonAdd, List, Paid, Event } from '@mui/icons-material'

// import CurvedBg from '../../../public/res/svgs/home_bg.svg'

const HomePage = () => {
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
          <div className="user-info absolute top-0 right-0">
            <UserInfoTile />
          </div>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: '8em',
            }}
          >
            <h1 className="text-center text-5xl mb-8 font-bold">
              Pendo Refugee Camp
            </h1>
            <Stack direction="row" spacing={10}>
              <HomeTile
                label="Register Refugee"
                route={routes.newRefugee()}
                icon={<PersonAdd fontSize="large" />}
              />

              <HomeTile
                label="View Refugee"
                route={routes.allRefugees()}
                icon={<List fontSize="large" />}
              />

              <HomeTile
                label="Funds"
                route={routes.funds()}
                icon={<Paid fontSize="large" />}
              />

              <HomeTile
                label="Events"
                route={routes.events()}
                icon={<Event fontSize="large" />}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default HomePage
