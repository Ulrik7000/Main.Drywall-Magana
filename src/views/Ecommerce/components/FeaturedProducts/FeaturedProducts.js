import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  image: {
    maxWidth: 390,
    height: 'auto',
    position: 'absolute',
    bottom: '-164px',
    right: 0,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));


const FeaturedProducts = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (



    <div className={clsx(classes.root, className)} {...rest}>

      <Grid container justify="space-between">
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <SectionHeader
            title="Include in your quote the materials you need for your next project."
            subtitle="Now you can add everything you need for your project with just a few clicks."
            subtitleColor="textPrimary"
            ctaGroup={[
              <Button variant="contained" href="/shop/materials" color="default" size="large">
                Buy now
              </Button>,
            ]}
            align="left"
            data-aos="fade-up"
            disableGutter
          />
        </Grid>
      </Grid>
      <Image
        src="images/usg-cgc.png"
        srcSet="images/usg-cgc.png 2x"
        alt=" "
        className={classes.image}
        data-aos={'fade-up'}
      />
    </div>
  );
};

FeaturedProducts.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default FeaturedProducts;
