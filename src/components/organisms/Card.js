import React from 'react';
import { shape, string } from 'prop-types';
import {
  Card as MuiCard,
  CardHeader,
  Chip,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  IconButton,
} from '@material-ui/core';
import { Favorite, Share } from '@material-ui/icons';

import useStyles from '../../styles/components/organisms/Card';

export default function Card({ post }) {
  const classes = useStyles();

  const tags = post.childMarkdownRemark.frontmatter.tags
    .split(',')
    .slice(0, 3)
    .map((tag) => (
      <Chip
        className={classes.chip}
        variant="outlined"
        size="small"
        label={tag}
        color="secondary"
        key={tag}
      />
    ));

  return (
    <MuiCard className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.imageCover}
          image={post.childMarkdownRemark.frontmatter.cover}
          title={post.childMarkdownRemark.frontmatter.title}
        />
        <CardHeader
          avatar={(
            <Avatar>
              <img className={classes.imageAvatar} src="https://scontent.fbog2-2.fna.fbcdn.net/v/t1.0-9/100670912_10158012645747860_1446573903307603968_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeFCj2j6ABV3pjLMmtU_fm5EsXos9yuUmlWxeiz3K5SaVaK8WFsVK0aYgbNpEfqvTPI&_nc_ohc=PSsM6csgaNIAX8_qi-I&_nc_ht=scontent.fbog2-2.fna&oh=d7236430fbb8e1a3a5da56eceb679988&oe=5FAF7193" alt="author" />
            </Avatar>
        )}
          title={post.childMarkdownRemark.frontmatter.title}
          subheader={post.childMarkdownRemark.frontmatter.author}
        />
        <CardContent>
          <Typography>{post.childMarkdownRemark.excerpt}</Typography>
          <div className={classes.tags}>
            {tags}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
    </MuiCard>
  );
}

Card.propTypes = {
  post: shape({
    childMarkdownRemark: shape({
      excerpt: string,
      frontmatter: shape({
        author: string,
        cover: string,
        tags: string,
        title: string,
      }),
    }),
    sourceInstanceName: string,
  }),
};

Card.defaultProps = {
  post: {
    childMarkdownRemark: {
      excerpt: 'Content does not found',
      frontmatter: {
        author: 'Author does not found',
        cover: 'https://www.cityofnya.com/wp-content/uploads/2017/12/404.png',
        tags: '',
        title: 'Title does not found',
      },
    },
    sourceInstanceName: 'drafts',
  },
};
