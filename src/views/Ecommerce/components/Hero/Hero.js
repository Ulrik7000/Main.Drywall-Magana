import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Link } from 'react-router-dom';


import { useCycle } from "framer-motion";
import { motion } from 'framer-motion'
import ImageHolder from "./ImageHolder";
import IconHolder from "./IconHolder";

import { servicesScene, materialsScene, toolsScene, apparelScene } from "./scenes";

import "./Hero.css";
const SLIDE_CHANGE_TIME_MS = 4000;

const useStyles = makeStyles(theme => ({
  price: {
    color: theme.palette.text.primary,
    fontSize: 32,
    fontWeight: 'normal',
    [theme.breakpoints.up('md')]: {
      fontSize: 48,
    },
  },
  disclimer: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1 / 2, 1),
    background: theme.palette.alternate.main,
    display: 'inline-block',
  },
  image: {
    maxWidth: 600,
  },
}));

const Hero = props => {
  const { linkUrl, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [currentScene, setCurrentScene] = useCycle(
     servicesScene,
     materialsScene,
     toolsScene,
     apparelScene,
   );

   useEffect(() => {
       const timeOut = setTimeout(setCurrentScene, SLIDE_CHANGE_TIME_MS);
       return () => clearTimeout(timeOut);
     }, [currentScene, setCurrentScene]);

  return (
    <div className={className} {...rest}>


      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <SectionHeader
            title="Shop here for the materials and drywall finish service for your next project."
            subtitle={<span className={classes.price}></span>}
            ctaGroup={[''
              // <Button variant="contained" color="primary" size="large">
              //   Buy now
              // </Button>,
            ]}
            align="left"
            data-aos="fade-up"
            titleVariant="h3"
          />
          <div className={classes.disclimer} data-aos="fade-up">
            <Typography variant="subtitle1" color="textSecondary">
              Drywall Magana is the only business in Canada with a one stop online store for all your drywall finishing needs.
            </Typography>
          </div>
        </Grid>

      </Grid>

      <Link to=
      {currentScene.linkUrl}
      >
      <div className="hero">
      <IconHolder icon={currentScene.icon} text={currentScene.text} />
      <ImageHolder
      img={currentScene.image1}
      className="category-image category-image__one"
      />
      <ImageHolder
      img={currentScene.image2}
      className="category-image category-image__two"
      />
      <ImageHolder
      img={currentScene.image3}
      className="category-image category-image__three"
      />
      </div>
      </Link>
    </div>
  );
};

// <Grid
//   item
//   container
//   justify="center"
//   xs={12}
//   md={6}
//   data-aos={'fade-up'}
// >
//   <Image
//     src="https://assets.maccarianagency.com/the-front/photos/ecommerce/hero-cover.png"
//     srcSet="https://assets.maccarianagency.com/the-front/photos/ecommerce/hero-cover@2x.png 2x"
//     alt="Headphones"
//     className={classes.image}
//   />
//
//
// </Grid>
Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
