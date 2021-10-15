import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: 420,
  },
}));

const Story = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems="center"
          justify="flex-start"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <div>
            <SectionHeader
              title="Our story"
              subtitle="DRYWALL MAGANA is represented by a professional skilled taper trained by veteran specialists of the trade, whose projects are focused on Toronto and the GTA, the services part of my scope of work are: ✔️ Taping mudding and sanding. ✔️ Drywall repairs. ✔️ Immediate availability on basements, new houses, repairs, warehouses, offices and garages. ✔️ Stucco and general texture removal (level 5 skimming and full surface smoothing) There is no job too big or too small, I take specialized focus on every different project depending on its needs. DRYWALL MAGANA is a full-service drywall finish business supplying all around the GTA. I take pride on delivering the best finish on each proyect."
              align="left"
              disableGutter
              subtitleProps={{
                color: 'textPrimary',
                variant: 'body1',
              }}
            />
          </div>
        </Grid>
        <Grid
          item
          container
          justify={isMd ? 'flex-end' : 'flex-start'}
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="images/Emoji1.png"
            alt="Our story"
            className={classes.image}
          />
          <Image
            src="images/logoclean.png"
            alt="Our story"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Story.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Story;
