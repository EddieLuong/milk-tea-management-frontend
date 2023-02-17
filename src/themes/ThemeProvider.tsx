import React from 'react';

import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import { muiTheme } from './RootTheme';

interface IThemeProvider {
  children: any;
}

const Theme = ({ children }: IThemeProvider) => {
  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
};

export default Theme;
