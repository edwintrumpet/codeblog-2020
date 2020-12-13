import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    paddingLeft: 16,
    paddingRight: 16,
    '& h1, & h2, & h3, & h4, & h5, & h6': {
      fontFamily: 'ABeeZee, Roboto, -apple-system, BlinkMacSystemFont',
    },
    '& li > .language-text, & p > .language-text': {
      backgroundColor: '#dbdbdb',
      color: '#000000de',
    },
    '& img': {
      display: 'block',
      margin: 'auto',
      maxWidth: '100%',
    },
    '@media (min-width: 600px)': {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
}));
