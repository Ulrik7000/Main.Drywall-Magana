import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, NoSsr, Grid, Button, useMediaQuery, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const useStyles = makeStyles(theme => ({
  quickStartSection: {
    '& .section-header__cta-container': {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        '& .section-header__cta-item-wrapper': {
          width: '100%',
          '&:last-child': {
            marginLeft: 0,
            marginTop: theme.spacing(1),
          },
          '& .MuiButtonBase-root': {
            width: '100%',
          },
        },
      },
    }
  },
  fontWeightBold: {
    fontWeight: '900',
  },
  editor: {
    paddingLeft: `${theme.spacing(2)}px !important`,
    paddingRight: `${theme.spacing(2)}px !important`,
    borderRadius: theme.spacing(1/2),
    width: '100%',
  },
  logoImg: {
    maxWidth: 100,
  },
}));

const QuickStart = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const docsButton = (
    <Button size="large" variant="outlined" color="primary" component="a" href="/about">
     About_Drywall magana
    </Button>
  );

  const buyButton = (
    <Button
      size="large"
      variant="contained"
      color="primary"
      component="a"
      href="/contact-page"
    >
      Contact us
    </Button>
  );

  return (
    <div className={className} {...rest}>
      <Grid container justify="space-between" spacing={4}>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={6} data-aos={'fade-right'}>
              <SectionHeader
                // title="Less code. More speed"
                // subtitle="theFront is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications."
                // ctaGroup={[docsButton, buyButton]}
                // align={isMd ? 'left' : 'center'}
                // disableGutter
                // titleVariant="h3"
                // titleProps={{ className: classes.fontWeightBold }}
                // className={classes.quickStartSection}
              />
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={isMd ? 4 : 2} direction={isMd ? 'row': 'column-reverse'}>
            <Grid item xs={12} container alignItems="center" md={6} data-aos={'fade-right'}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography color="primary" variant="h4" gutterBottom>200+</Typography>
                  <Typography color="textPrimary" variant="body1">
                    200 + satisfied customers.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography color="primary" variant="h4" gutterBottom>250,000+</Typography>
                  <Typography color="textPrimary" variant="body1">
                    250,000 sq/ft + drywall surface finished to meet the highest expectations.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography color="primary" variant="h4" gutterBottom>15+</Typography>
                  <Typography color="textPrimary" variant="body1">
                    15 + different drywall finishing services, including popcorn removal and priming.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography color="primary" variant="h4" gutterBottom>10+</Typography>
                  <Typography color="textPrimary" variant="body1">
                    10 + steps taken on each project to reach the final product, making sure to cover every inch with high detail.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} data-aos={'fade-left'}>
              <SectionHeader
                title="Splendid drywall finish for all kinds of projects"
                subtitle="Whether you're expanding your home space, renovating an important room, starting a new location for your business or building beautiful living spaces for your clients, Drywall Magana delivers the tidiest drywall finish for your new project."
                align="left"
                disableGutter
                titleVariant="h3"
                titleProps={{ className: classes.fontWeightBold }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

QuickStart.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default QuickStart;
