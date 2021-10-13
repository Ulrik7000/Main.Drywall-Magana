import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Typography, colors, Button, Avatar } from '@material-ui/core';
import { LearnMoreLink, Image } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';
import Slider3 from './slider3copy#2';

const useStyles = makeStyles(theme => ({
  learnMoreLink: {
    marginTop: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
}));

const Advantages = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });



  return (
    <div className={className} data-aos="fade-up" {...rest}>
    <SectionHeader
      title="List of repairs and their costs"
      subtitle="Slider to calculate popcorn removal price and other type of common repairs and their costs."
      ctaGroup={[null]}
      fadeUp
    />
    <Slider3/>


      <Grid container spacing={isLg ? 10 : 2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            data-aos="fade-up"
          >
            <CardBase liftUp variant="outlined">
            <DescriptionListIcon
              icon={
                  <Image src={item.logo} alt={item.name}/>
              }
              title={item.name}
              subtitle={item.title}
              align="center"
            />
            
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Advantages.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Advantages;
