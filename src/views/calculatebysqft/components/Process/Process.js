import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import Slider3 from './slider3copy#2';

const Process = props => {
  const { className, ...rest } = props;

  return (
    <div className={clsx('jarallax', className)} {...rest}>
      <SectionHeader
        title="CALCULATOR #2"
        titleVariant="h2"
        subtitle="SELECT WITH THE SLIDERS BELOW THE TOTAL SQUARE FOOTAGE OF THE WALLS AND CEILING ON YOUR PROJECT AND THE HEIGHT OF THE CEILING TO OBTAIN YOUR PROJECT'S ESTIMATE COST.."
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

Process.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Process;
