import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container: {
    maxWidth: 1700,
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    padding: 8,
    gridGap: 8,
    justifyContent: 'center',
    '@media (min-width: 600px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      padding: 16,
      gridGap: 16,
    },
    '@media (min-width: 960px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
}));
