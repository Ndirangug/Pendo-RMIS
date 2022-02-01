import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#159947',
      background: '#E5E5E5',
    },
    secondary: {
      main: '#49b265',
      secondary2: '#49B265',
      secondary3: '#159947',
      secondary4: '#49B265',
    },
  },
  typography: {
    fontFamily: [
      'Lexend Deca',
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})
