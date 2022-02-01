import {
  Card,
  TextField,
  Avatar,
  Box,
  MobileStepper,
  Button,
} from '@mui/material'
import { margin } from '@mui/system'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

const NewRefugeeForm = () => {
  const steps = [
    <>
      <div className="flex justify-center items-start">
        <TextField
          sx={{ margin: '6px 8px' }}
          label="First Name"
          variant="outlined"
        />
        <TextField
          sx={{ margin: '6px 8px' }}
          label="Last Name"
          variant="outlined"
        />
      </div>
    </>,
    <>
      <div>
        <TextField
          sx={{ margin: '6px 8px' }}
          label="Phone"
          variant="outlined"
        />
      </div>
    </>,
    <>
      <div>
        <TextField sx={{ margin: '6px 8px' }} label="Sex" variant="outlined" />
      </div>
    </>,
    <>
      <div>
        <TextField
          sx={{ margin: '6px 8px' }}
          label="Date of Birth"
          variant="outlined"
        />
      </div>
    </>,
    <>
      <div>
        <TextField sx={{ margin: '6px 8px' }} label="Tent" variant="outlined" />
      </div>
    </>,
  ]

  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = steps.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <div className="flex justify-center items-center">
      <Card
        className="flex flex-col justify-center items-center mt-16"
        sx={{ height: '60vh', width: '80vw', zIndex: 2 }}
      >
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
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
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
