import { Button, Menu, MenuItem } from '@mui/material'
import { useAuth } from '@redwoodjs/auth'
import { Person, KeyboardArrowDown } from '@mui/icons-material'
import React, { useState } from 'react'
import CurrentUserCell from 'src/components/CurrentUserCell/CurrentUserCell'

const UserInfoTile = () => {
  const [user, setUser] = useState({})
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const { currentUser, logOut } = useAuth()

  return (
    <div>
      <CurrentUserCell id={currentUser.id} setUser={setUser} />

      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <div className="flex justify-between items-center">
          <Person fontSize="large" />
          <p className="capitalize">
            {user.firstName} {user.lastName}
          </p>
          <KeyboardArrowDown />
        </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default UserInfoTile
