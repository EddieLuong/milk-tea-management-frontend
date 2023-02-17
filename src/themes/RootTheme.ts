import { createTheme } from '@mui/material';

import { PRIMARY_MAIN_COLOR, PRIMARY_LIGHT_COLOR } from './colors';
import GlobalStyles from './GlobalStyles';

export const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: PRIMARY_MAIN_COLOR,
      light: PRIMARY_LIGHT_COLOR,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: GlobalStyles,
    },
  },
});

export default muiTheme;
