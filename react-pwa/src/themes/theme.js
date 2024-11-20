// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4caf50',
      light: '#63e657',
      dark: '#388e3c',
      contrastText: '#000000',
    },
    secondary: {
      main: '#dc004e',
      light: '#ff5c8d',
      dark: '#9a0036',
      contrastText: '#000000',
    },
    background: {
      default: 'linear-gradient(135deg, #d7ccc8 0%, #bcaaa4 100%)',
      paper: '#fefefe',
    },
    text: {
      primary: '#4caf50',
      secondary: '#000000',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: 2,
          color: '#000000',
        },
        title: {
          fontSize: '2.2rem',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #66bb6a 0%, #43a047 50%, #2e7d32 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        },
        subtitle: {
          fontSize: '1.1rem',
          fontWeight: 'bold',
          color: '#1976d2',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.1rem',
          borderRadius: 5,
          textTransform: 'none',
          backgroundColor: '#388e3c',
          color: '#ffffff',

        },
        text: {
          fontSize: '1rem',
          color: 'transparent',
          backgroundColor: '#4caf50',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          textFillColor: 'transparent',
          WebkitTextFillColor: 'transparent',
        },
      },
    },


    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: '#fefefe',
        },
        indicator: {
          backgroundColor: '#4caf50',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backgroundColor: '#f2f2f2',
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }),
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          marginRight: 2,
          '&.MuiIconButton-sound': {
            borderRadius: '0 10px 10px 0',
          },
          '&.MuiIconButton-send': {
            borderRadius: '50%',
            backgroundImage: 'linear-gradient(135deg, #6a5acd 0%, #1976d2 20%, #1976d2 80%, #6a5acd 100%)',
            color: '#ffffff',
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '15px',
          borderRadius: '10px',
        },
        assistant: {
          backgroundImage: 'linear-gradient(135deg, #66bb6a 0%, #43a047 50%, #2e7d32 100%)',
          color: '#ffffff',
        },
        user: {
          backgroundColor: '#f5f5f5',
        },
      },
    },
  },

  spacing: 8,
});

export default theme;
