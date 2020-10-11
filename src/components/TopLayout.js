import React from 'react';
import { node } from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/muiTheme';

export default function TopLayout({ children }) {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
}

TopLayout.propTypes = {
  children: node,
};

TopLayout.defaultProps = {
  children: null,
};
