export default {
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          textDecoration: 'none',
        },
      },
    },
  },
  palette: {
    primary: {
      light: '#9575cd',
      main: '#673ab7',
      dark: '#512da8',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e91e63',
      main: '#c2185b',
      dark: '#880e4f',
      contrastText: '#fff',
    },
  },
};
