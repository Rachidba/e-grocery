import { createMuiTheme } from '@material-ui/core';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5657ff',
    },
  },
  shape: {
    borderRadius: 4,
  },

  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        padding: '12px',
      },
    },
  },
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'primary',
    },
    MuiTextField: {
      variant: 'outlined',
    },
  },
});

export default Theme;
