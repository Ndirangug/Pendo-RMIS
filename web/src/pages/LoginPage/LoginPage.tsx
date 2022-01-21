import React, { useState } from 'react'
import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import { Form, PasswordField, Submit, FieldError } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'
import { Box, Button, InputAdornment, styled, TextField } from '@mui/material'
import TopRightCurve from '../../../public/res/svgs/left_corner.svg'
import Circles from '../../../public/res/svgs/circles.svg'
import { Person, Password } from '@mui/icons-material'
import { WhiteTextField, WhiteButton } from 'src/styled_components/components'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const onSubmit = async () => {
    console.log(username, password)

    const response = await logIn({ username, password })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <Box
        sx={{
          bgcolor: 'primary.main',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Toaster toastOptions={{ duration: 6000 }} />

        <Box
          sx={{
            position: 'fixed',
            top: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          <TopRightCurve width={'40vw'} height={'34vw'} />
        </Box>

        <Box
          sx={{
            position: 'fixed',
            bottom: '-20vw',
            left: '-20vw',
            zIndex: 1,
          }}
        >
          <Circles width={'40vw'} height={'40vw'} />
        </Box>

        <Box
          sx={{
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1 className="text-white text-5xl font-bold">Pendo Refugee Camp</h1>
          <p className="text-white text-base font-semibold my-5">ADMIN LOGIN</p>

          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <WhiteTextField
              margin="normal"
              className="my-4"
              autoComplete="{true}"
              id="username"
              label="Username"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person htmlColor="white" />
                  </InputAdornment>
                ),
              }}
            />

            <WhiteTextField
              type="password"
              margin="normal"
              className="my-4"
              id="password"
              label="Password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Password htmlColor="white" />
                  </InputAdornment>
                ),
              }}
            />

            <div className="mt-6 w-full">
              <WhiteButton variant="contained" onClick={onSubmit}>
                LOG IN
              </WhiteButton>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default LoginPage
