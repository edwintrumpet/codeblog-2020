import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: 600,
  },
  imageCover: {
    width: '100%',
    height: '200px',
  },
  imageAvatar: {
    width: '100%',
    height: '100%',
  },
  tags: {
  },
  chip: {
    marginTop: 8,
    marginRight: 8,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));
