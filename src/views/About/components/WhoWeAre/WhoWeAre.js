import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const WhoWeAre = props => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title="Who are we?"
            subtitle="Drywall Magana came as a result of combining drywall installing and finishing skills to provide more complete services to the market. Proffesionals in this trade will often dismiss small jobs, odd jobs, or too time consuming projects, leaving a bad image on the specialist of the trade. I started Drywal Magana to take care of every homeowner that needs my trade's services but has had a bad experience obtaining a moderate pricing and great quality for their proyect. Take your business with us and see why people recommend us like they do! You will wish to have called us earlier."
            disableGutter
            align="left"
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title="What’s up with the pricing system?"
            subtitle="While we do understand the importance of an on-site quote, (and provide for free when asked for) we came up with an unbiased and innovative alternative for quoting projects, specially for the homeowners and contractors who are more comfortable to get their relevant information about their project completion details via online aplications. This was developed with the intention of becoming more competitive on the market and offer you easier solutions for your project."
            disableGutter
            align="left"
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

WhoWeAre.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default WhoWeAre;
