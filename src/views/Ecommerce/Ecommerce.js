import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Categories,
  FeaturedProducts,
  Hero,
  LatestProducts,
  News,
  Newsletter,
  // Overview,
  Products,
  QuickSearch,
  Reviews,
  Sales,
} from './components';


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
} from './data';

// import { auth, signOut} from '../../firebase/firebase.utils';

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionFeaturedProducts: {
    background: theme.palette.secondary.main,
  },
  reviewSection: {
    background: theme.palette.primary.dark,
  },
}));

  const Ecommerce = (props) => {

  const classes = useStyles();




  return (
    <div>

      <Section className={classes.pagePaddingTop}>
        <Hero />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Categories data={categories} />
      </Section>
      <Section>
        <Products data={featuredProducts} />
      </Section>


    </div>
  );
}


export default Ecommerce;
