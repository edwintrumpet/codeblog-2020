import React from 'react';
import { string } from 'prop-types';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { Link } from 'gatsby';

import Logo from '../../assets/icons/Logo';
import useStyles from '../../styles/components/organisms/Header';
import { getMetadata } from '../../hooks';

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
          variant="contained"
          disableElevation
        >
          {langButton}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  width: string,
};

Header.defaultProps = {
  width: 'xs',
};

export default withWidth()(Header);
