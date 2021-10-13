import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  textWhite: {
    color: 'white',
    textTransform: 'uppercase',
  },
}));

const Nike = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}>Zauq restaurant</span>}
        titleVariant="h1"
        subtitle={<span className={classes.textWhite}>Full drywall finish renovation on their fine dining halal restaurant, at Missisauga.</span>}
        ctaGroup={[
          <Button variant="outlined" color="secondary" size="large" href="/portfolio-page">
            See portfolio
          </Button>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

Nike.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Nike;
