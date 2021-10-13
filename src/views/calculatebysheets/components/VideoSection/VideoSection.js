import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { IconAlternate } from 'components/molecules';


const useStyles = makeStyles(theme => ({
  videoIframe: {
    boxShadow: `0 5px 15px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none',
    },
  },
}));

const VideoSection = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div style={{behavior: 'smooth'}} className={className} {...rest}>
      <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <SectionHeader
            title="Price based on drywall sheets installed."
            subtitle="Follow these steps to get the most accurate price for your proyect. The number of sheets includes every sheet that was cut to fit your proyect. If your proyect falls on the category under 40 sheets please send a picture by text,or email to provide a more accurate quote for free."
            ctaGroup={[
              <Button
                scrollBehavior="smooth"
                variant="contained"
                color="primary"
                size={isMd ? 'large' : 'medium'}
                href="#soluciones"
              >
                Calculate your project's cost
              </Button>,
            ]}
            align={isMd ? 'left' : 'center'}
            disableGutter
            titleVariant="h3"
          />
          <Button
            size="large"
            variant="outlined"
            color="primary"
            component="a"
            href="/contact-page"
          >
            Contact us
          </Button>



        </Grid>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <iframe
            className={classes.videoIframe}
            title="video"
            width="100%"
            height="700"
            src="https://www.instagram.com/p/CQRVxxujzgb/embed"
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          />
        </Grid>
      </Grid>
    </div>
  );
};

VideoSection.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default VideoSection;
