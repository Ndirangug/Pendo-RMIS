import { Box } from '@mui/system'
import Circles from 'public/res/svgs/circles2.svg'
import Dots from 'public/res/svgs/dotted_group.svg'
import { Link } from '@redwoodjs/router'
import { ArrowBack } from '@mui/icons-material'
import UserInfoTile from 'src/components/UserInfoTile/UserInfoTile'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className="user-info absolute top-0 right-0 z-10">
        <UserInfoTile />
      </div>
      <Box
        sx={{
          backgroundColor: 'primary.background',
          height: '100vh',
          weight: '100vw',
        }}
      >
        <Circles
          width={'50vw'}
          className="fixed bottom-0 left-0 -translate-x-[45%] translate-y-[45%]"
        />
        <Dots width={'100vw'} height={'100vh'} className="fixed top-0 left-0" />

        <main className="flex flex-col p-16">{children}</main>
      </Box>
    </>
  )
}

export default MainLayout
