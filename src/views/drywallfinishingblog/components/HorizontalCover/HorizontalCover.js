import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Avatar,
  colors,
  FormControl,
  InputAdornment,
  Button,
  Typography,
  Grid,
  Divider,
  OutlinedInput,
} from '@material-ui/core';
import { Image, Icon } from 'components/atoms';
import { CardProduct } from 'components/organisms';
import Hero from './';

const useStyles = makeStyles(theme => ({
  cardProduct: {
    display: 'flex',
    height: '100%',
    borderRadius: theme.spacing(1),
    position: 'relative',
    '& .card-product__media': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
  cardProductReverse: {
    '& .blog-content': {
      alignSelf: 'flex-end',
    },
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    objectFit: 'cover',
  },
  imageCover: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'black',
    opacity: 0.3,
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    zIndex: 3,
    maxWidth: '50%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
  },
  tags: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tag: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1 / 2),
    background: theme.palette.secondary.light,
    color: 'white',
    margin: theme.spacing(0, 1, 1, 0),
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 2, 2, 0),
    },
  },
  textWhite: {
    color: 'white',
  },
}));

const HorizontalCover = props => {

  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const BlogMediaContent = props => (
    <div className={classes.imageContainer}>
      <Image
        {...props}
        className={classes.image}
        lazyProps={{ width: '100%', height: '100%' }}
      />
      <div className={classes.imageCover} />
    </div>
  );

  const [search, setSearch] = useState(``);
  const [tags, setTags] = useState([ '' ]);

  // const filteredArticle = tags.filter(li => li.toLowerCase().includes(search.toLowerCase()));



  const BlogContent = props => (

    <div className={clsx(classes.blogContent, 'blog-content')}>
      <Typography variant="h5" gutterBottom className={classes.textWhite}>
        {props.title}
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        className={classes.textWhite}
      >
        {props.subtitle}
      </Typography>


      <div className={classes.tags}>
        {
          // props.tags.map((item, index) => (
          props.tags.filter(tags => tags.toLowerCase().includes(search.toLowerCase()))
            .map((item, key) => (
          <Typography
            variant="caption"
            color="primary"
            className={classes.tag}
            key={''}
          >
            {item}
          </Typography>
        ))}
      </div>


      <div style={{ flexGrow: 1 }} />
      <Divider className={classes.divider} />
      <div className={classes.tags}>
        <div className={classes.avatarContainer}>
          <Avatar {...props.author.photo} className={classes.avatar} />
          <Typography variant="body2" className={classes.textWhite}>
            {props.author.name}
          </Typography>
        </div>
        <Typography variant="overline" className={classes.textWhite}>
          {props.date}
        </Typography>
      </div>
    </div>

  );

  return (
    <div className={className} {...rest}>

    <Grid container justify="space-between" spacing={isMd ? 4 : 2}>

    <Grid item xs={12}>
    <div className={classes.searchInputContainer} data-aos="fade-up">

        <FormControl fullWidth variant="outlined">
          <OutlinedInput
          className='search'
          type='search'
          placeholder= 'search'
          onChange= {e =>
            setSearch(e.target.value)}
            // props.tags.filter(tags => tags.toLowerCase().includes(search.toLowerCase()))
            //   .map((item, key) => (
            startAdornment={
              <InputAdornment position="start">
                <Icon
                  fontIconClass="fas fa-search"
                  fontIconColor={colors.blueGrey[900]}
                />
              </InputAdornment>}
          />
        </FormControl>
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={classes.searchButton}
          onClick={e =>
            setSearch(e.target.value)}
        >
          Search
        </Button>
      </div>
      </Grid>
    </Grid>


      <Grid container spacing={isMd ? 4 : 2}>
        {
        props.data.map((item, index) => (
        //   props.tags.filter(tags => tags.toLowerCase().includes(search.toLowerCase()))
        //     .map((item, key) => (
          <Grid item xs={12} key={''} data-aos="fade-up">
            <CardProduct
              withShadow
              liftUp
              className={clsx(
                classes.cardProduct,
                index % 2 !== 0 ? classes.cardProductReverse : {},
              )}
              mediaContent={
                <BlogMediaContent {...item.cover} alt={item.title}
                />
              }

              cardContent={
                <BlogContent
                  title={item.title}
                  subtitle={item.subtitle}
                  tags={item.tags}
                  author={item.author}
                  date={item.date}
                />
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

HorizontalCover.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default HorizontalCover;
