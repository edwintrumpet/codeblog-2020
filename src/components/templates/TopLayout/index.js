import React from 'react';
import { node } from 'prop-types';
import { Helmet } from 'react-helmet';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/muiTheme';
import { Header } from '../../organisms';

export default function TopLayout({ children }) {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
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
