import { createMuiTheme } from '@material-ui/core';

export const primaryColor = '#5657ff';
export const backgroundColor = '#F3F3F4';
export const borderRadius = 4;

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  shape: {
    borderRadius: borderRadius,
  },

  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        padding: '6px',
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
