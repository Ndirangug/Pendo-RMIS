import { Button, styled, TextField } from '@mui/material'
import { grey } from '@mui/material/colors'

export const WhiteTextField = styled(TextField)({
  '& input': {
    color: 'white',
  },
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
})

export const WhiteButton = styled(Button)(() => ({
  color: 'black',
  backgroundColor: 'white',
  borderRadius: 0,
  width: '100%',
  '&:hover ': {
    backgroundColor: grey[100],
  },
}))
