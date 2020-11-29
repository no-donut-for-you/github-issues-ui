import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import theme from './default/theme';

const appTheme = createMuiTheme({
  palette: {
    ...theme.palette
  }
});

export default function DefaultTheme(props) {
  return (
    <MuiThemeProvider theme={appTheme}>
      {props.children}
    </MuiThemeProvider>
  );
}
