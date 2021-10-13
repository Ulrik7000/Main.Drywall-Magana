import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const Welcome = props => {
  const { className, ...rest } = props;

  return (
    <div className={clsx('jarallax', className)} {...rest}>
      <SectionHeader
        title="Price based on square footage."
        titleVariant="h2"
        subtitle="Please input your project's details on the calculator #1 if your project is under 1500 sq/ft, or on the #2 if it is equal or exceeds 1500 sq/ft. If your proyect falls on the category under 500 sq/ft please send a picture by text or email."
        ctaGroup={[
          <Button variant="contained" color="primary" size="large" href="#calc1">
            Calculator #1
          </Button>,
          <Button variant="contained" color="primary" size="large" href="#calc2">
            Calculator #2
          </Button>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

Welcome.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Welcome;
