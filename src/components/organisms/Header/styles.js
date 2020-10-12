import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
  },
  brandText: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 8,
    color: 'white',
  },
  title: {
    fontSize: 16,
    fontFamily: 'ABeeZee, Roboto, -apple-system, BlinkMacSystemFont',
    '@media (min-width: 600px)': {
      fontSize: 22,
    },
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'ABeeZee, Roboto, -apple-system, BlinkMacSystemFont',
    '@media (min-width: 600px)': {
      fontSize: 16,
    },
  },
});
