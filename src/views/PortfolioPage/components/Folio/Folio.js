import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(-2),
      marginLeft: theme.spacing(-2),
    },
  },
  folioItem: {
    position: 'relative',
    overflow: 'hidden',
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
    '&:hover': {
      '& .folio__image': {
        transform: 'scale(1.2)',
      },
    },
  },
  image: {
    transitionDuration: '.7s',
    transform: 'scale(1.0)',
    minHeight: 400,
    objectFit: 'cover',
    [theme.breakpoints.up('md')]: {
      minHeight: 600,
    },
  },
  folioInfoWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, #000000)',
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
  },
  folioTitle: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  folioSubtitle: {
    color: 'white',
    textTransform: 'capitalize',
    margin: theme.spacing(1, 0),
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  leftGrid: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(1),
      marginBottom: 0,
    },
  },
  rightGrid: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(1),
    },
  },
}));

const Folio = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const leftGridData = data.slice(0, 2);
  const rightGridData = data.slice(2);

  return (
    <div >


    <SectionHeader id="socmed" 
      title="Our Social networks"
      subtitle="If you like our business principles and ideals, you can give us a follow on any of our main social media networks."
      subtitleProps={{
        variant: 'body1',
        color: 'textPrimary',
      }}
      fadeUp
    />


    <iframe style={{border: 0, width: '100%', height: '100%'}} scrolling="yes" src="https://embedsocial.com/facebook_album/pro_hashtag/a0395189a6f35e6344b521015b621e839dd0116f" width={340} height={500} style={{border: 'none', margin: '100px', overflow: 'hidden'}} scrolling="yes" frameBorder={0} allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />



    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDrywall-Magana-103796534431548&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" widgetName="afwnl" width={340} height={500} style={{border: 'none', margin: '100px', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />


<embed src="images/HomeStars.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" style={{margin: '100px', zoom:"scale"}} width={350} height={500} title="Linkedin" alt="Linkedin" />


<embed src="images/Linkedin.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" style={{margin: '100px', zoom:"scale"}} width={350} height={500} title="Linkedin" alt="Linkedin" />


    </div>
  );
};

Folio.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Folio;
