import {
  Card,
  TextField,
  Avatar,
  Box,
  MobileStepper,
  Button,
  MenuItem,
} from '@mui/material'
import { useMutation } from '@redwoodjs/web'
import { margin } from '@mui/system'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import React, { useEffect, useRef, useState } from 'react'
import { DatePicker } from '@mui/lab'
import TentsCell from '../TentsCell/TentsCell'
import { CREATE_REFUGEE } from 'src/graphql/mutations'
import { toast, Toaster } from '@redwoodjs/web/toast'

const NewRefugeeForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [sex, setSex] = useState('MALE')
  const [phone, setPhone] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [tent, setTent] = useState(1)
  const [tents, setTents] = useState([])
  const [country, setCountry] = useState('')
  const refugeeCode = useRef('')

  const [createRefugee, { loading, error }] = useMutation(CREATE_REFUGEE, {
    onCompleted: () => {
      toast.success('Created Refugee Succesfully!', { duration: 3000 })
    },
  })

  useEffect(() => {
    const randomCode = Math.floor(Math.random() * 1000000000)
    const targetTent = tents.find((t) => t.id === tent)
    refugeeCode.current = targetTent.code.substring(0, 2) + randomCode

    console.log('new refugee code', refugeeCode.current)
  }, [tent])

  const steps = [
    <>
      <div className="flex justify-center items-start">
        <TextField
          sx={{ margin: '6px 8px' }}
          label="First Name"
          variant="outlined"
          onChange={(event) => {
            setFirstName(event.target.value)
          }}
        />
        <TextField
          sx={{ margin: '6px 8px' }}
          label="Last Name"
          variant="outlined"
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
    </>,
    <>
      <div>
        <TextField
          sx={{ margin: '6px 8px' }}
          label="Country"
          variant="outlined"
          type="text"
          onChange={(event) => setCountry(event.target.value)}
        />
      </div>
    </>,
    <>
      <div>
        <TextField
          sx={{ margin: '6px 8px' }}
          label="Phone"
          variant="outlined"
          type="phone"
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
    </>,
    <>
      <div>
        <TextField
          select
          value={sex}
          sx={{ margin: '6px 8px' }}
          label="Sex"
          variant="outlined"
          onChange={(event) => setSex(event.target.value)}
        >
          <option key="MALE" value="MALE">
            MALE
          </option>
          <option key="FEMALE" value="FEMALE">
            FEMALE
          </option>
        </TextField>
      </div>
    </>,
    <>
      <div>
        <DatePicker
          label="Date Of Birth"
          value={dateOfBirth}
          onChange={(newValue) => {
            setDateOfBirth(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </>,
    <>
      <div>
        <TextField
          select
          value={tent}
          sx={{ margin: '6px 8px' }}
          label="Tent"
          variant="outlined"
          onChange={(event) => setTent(event.target.value)}
        >
          {tents.map((tent) => (
            <MenuItem key={tent.id} value={tent.id}>
              {tent.code}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </>,
  ]

  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = steps.length

  function resetForm() {
    setFirstName('')
    setLastName('')
    setSex('MALE')
    setDateOfBirth('')
    setActiveStep(0)
    setTent(1)
    setPhone('')
    setCountry('')
    refugeeCode.current = ''
  }

  const registerRefugee = async () => {
    console.log('register')
    try {
      await createRefugee({
        variables: {
          newRefugee: {
            phone,
            firstName,
            lastName,
            sex,
            dateOfBirth,
            tentId: tent,
            country,
            code: refugeeCode.current,
            photo: '',
          },
        },
      })

      resetForm()
    } catch (error) {
      console.log(error)
      toast.error(error, { duration: 3000 })
    }
  }

  const handleNext = () => {
    if (activeStep == maxSteps - 1) {
      registerRefugee()
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <div className="flex justify-center items-center">
      <Toaster />

      <Card
        className="flex flex-col justify-center items-center mt-16"
        sx={{ height: '60vh', width: '80vw', zIndex: 2 }}
      >
        <TentsCell setTents={setTents} />

        <div className="profile-pic mb-8">
          <Avatar sx={{ width: '10rem', height: '10rem' }}>H</Avatar>
        </div>

        <Box>{steps[activeStep]}</Box>

        <MobileStepper
          sx={{ width: '50%' }}
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext}>
              {activeStep === maxSteps - 1 ? 'FINISH' : 'NEXT'}
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Card>
    </div>
  )
}

export default NewRefugeeForm
