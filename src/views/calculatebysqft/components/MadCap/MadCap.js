import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import Slider3 from './slider3copy#1';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: 'white',
    textTransform: 'uppercase',
  },
}));

const MadCap = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div id="calcuno" className={className} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}>Calculator #1</span>}
        titleVariant="h1"
        subtitle={<span className={classes.textWhite}>Select with the sliders below the total square footage of the walls and ceiling on your project and the height of the ceiling to obtain your project's estimate cost.</span>}
        ctaGroup={[
          <Button variant="contained" color="primary" size="large" href="/contact-page">
            Contact us
          </Button>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
      <Slider3/>

    </div>
  );
};

MadCap.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default MadCap;
