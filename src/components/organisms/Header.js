import React from 'react';
import { Link } from 'gatsby';
import { string as _string } from 'prop-types';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import Logo from '../../assets/icons/Logo';
import { getMetadata } from '../../hooks';
import useStyles from '../../styles/components/organisms/Header';

function Header({ width }) {
  const classes = useStyles();

  const { title, subtitle } = getMetadata();

  const sizeLogo = isWidthUp('sm', width) ? 80 : 60;
  const langButton = isWidthUp('sm', width) ? 'Lang-ES' : 'ES';

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.header}>
        <Link to="/">
          <div className={classes.brand}>
            <Logo size={sizeLogo} />
            <div className={classes.brandText}>
              <Typography variant="h1" className={classes.title}>
                {title}
              </Typography>
              <Typography variant="h2" className={classes.subtitle}>
                {subtitle}
              </Typography>
            </div>
          </div>
        </Link>
        <Button
          color="primary"
          disableElevation
          variant="contained"
        >
          {langButton}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  width: _string,
};

Header.defaultProps = {
  width: 'xs',
};

export default withWidth()(Header);
