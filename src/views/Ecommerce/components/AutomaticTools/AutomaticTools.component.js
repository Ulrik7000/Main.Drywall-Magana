import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { SectionHeader, IconAlternate } from 'components/molecules';
import {
  useMediaQuery,
  colors,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import { Image } from 'components/atoms';


import {
  Categories,
  FeaturedProducts,
  Hero,
  LatestProducts,
  News,
  Newsletter,
  Overview,
  Products,
  QuickSearch,
  Reviews,
  Sales,
} from '../../components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  categories,
  featuredProducts,
  mostSoldProducts,
  news,
  latestProducts,
  reviews,
  automaticTools,
} from '../../data';

const useStyles = makeStyles(theme => ({
  card: {
    boxShadow: '0 9px 18px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: theme.spacing(2),
  },
  cardMedia: {
    height: 290,
    padding: theme.spacing(3, 3, 0, 3),
    position: 'relative',
    background: colors.indigo[50],
  },
  cardContent: {
    padding: theme.spacing(3),
  },
  image: {
    objectFit: 'contain',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  hearIconContainer: {
    position: 'absolute',
    top: theme.spacing(3),
    right: theme.spacing(3),
  },
  ratingContainer: {
    margin: theme.spacing(2, 0),
  },
  ratingIcon: {
    color: colors.yellow[700],
    marginRight: theme.spacing(1 / 2),
  },
  priceCta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const AutomaticTools = props => {

  const data = automaticTools;
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const rating = count => {
    const ratingArray = [];
    for (let i = 1; i <= 5; i += 1) {
      ratingArray.push(
        <i
          className={clsx(
            i <= count ? 'fas fa-star' : 'far fa-star',
            classes.ratingIcon,
          )}
          key={i}
        />,
      );
    }

    return ratingArray;
  };

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Automatic tools"
        subtitle="This is our cherry-picked list of elite automatic taping tools to finish your project the fastest and most uniform way. If you want to do your drywall finishing on your own, We recommend you to take a look at this list of automatic tools from the brand DeWalt, an inexpensive and good quality brand. ( click the buy now button to enter the CSR building supplies listing and complete the checkout on their end, Drywall Magana.Ltd does not guarantee availability, price or delivery of the product chosen, nor take responsability on the final checkout resolution between client and merchant )."
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up">
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia}>
                <Image
                  {...item.image}
                  alt={item.title}
                  className={classes.image}
                  lazyProps={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </CardMedia>
              <CardContent className={classes.cardContent}>
                <Typography
                  color="textPrimary"
                  variant="h5"
                  className={classes.fontWeightBold}
                >
                  {item.title}
                </Typography>
                <Typography
                  color="textPrimary"
                  variant="h7"
                  className={classes.fontWeightBold}
                >
                  {item.subtitle}
                </Typography>
                <div className={classes.ratingContainer}>
                  {rating(item.rating)}
                </div>
                <div className={classes.priceCta}>
                  <Typography
                    color="primary"
                    variant="h6"
                    className={classes.fontWeightBold}
                  >
                    {item.price}
                  </Typography>
                  <Button href={item.linkUrl} variant="contained" color="primary">
                    Buy now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12} container justify="center" data-aos="fade-up">

        </Grid>
      </Grid>
    </div>
  );
};

AutomaticTools.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default AutomaticTools;
