import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  colors,
  Avatar,
  Divider,
  Grid,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
  Typography,
} from '@material-ui/core';
import { Image, Icon } from 'components/atoms';
import { CardProduct } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import HorizontalCover from './'

const useStyles = makeStyles(theme => ({
  image: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
    },
  },
  searchInputContainer: {
    background: theme.palette.alternate.main,
    padding: theme.spacing(2),
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.11)',
    borderRadius: theme.spacing(1),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0 !important',
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: theme.spacing(2),
    },
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: 0,
    },
    '& .MuiOutlinedInput-input': {
      padding: 0,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  searchButton: {
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
    },
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
}));


const Hero = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const [search, setSearch] = useState(``);
  const [tags, setTags] = useState([
'freedom mobile', 'scissorlift', 'timely', 'commercial', 'scaffolding', 'high ceilings', 'curiosa society', 'purveyors of extraordinary things', 'store', 'level 5', 'zauq restaurant', 'custom design', 'restaurant', 'high end', "king's mall", 'high lighting', 'flawless surface', 'seamless finish', "jimmy's coffe", 'repairs', 'level3', 'DIY', 'dymon storage', 'commercial spaces', 'warehouse', 'etobicoke', 'level 5', 'popcorn removal', 'asbestos', 'rewarding renovations'  ]);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });



  return (
    <div className={className} {...rest}>
      <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <SectionHeader
            title={
              <span>
                We want to showcase all{' '}
                <Typography component="span" variant="inherit" color="primary">
                  the rich drywall finish alternatives.
                </Typography>
              </span>
            }
            subtitle="How we aproach your drywall finishing project doesn't have to be done by default, there's a great number of alternatives for you in case you want to increase its quality or go for a more economical solution."
            align={isMd ? 'left' : 'center'}
            disableGutter
            titleVariant="h3"
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://assets.maccarianagency.com/the-front/illustrations/mobiles.svg"
            className={classes.image}
          />
        </Grid>

      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
};

export default Hero;
