import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light', // we can change this based on user preference
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

export default theme
