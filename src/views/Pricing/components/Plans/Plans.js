import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const Plans = props => {
  const { data, className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Premium grade quality for all budget alternatives"
        subtitle="After our first contact you'll know every detail on how your project is going to be done from start to finish."
      />
      <Grid container justify="center" spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid
            item
            container
            direction="column"
            xs={12}
            md={4}
            key={index}
            data-aos="fade-up"
          >
            <SectionHeader
              title={item.title}
              subtitle={item.subtitle}
              titleProps={{
                variant: 'h6',
              }}
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
              align="left"
              disableGutter
            />
            <div style={{ flexGrow: 1 }} />
            
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Plans.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Plans;
