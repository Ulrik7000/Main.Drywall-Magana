import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Button, Typography, colors } from '@material-ui/core';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  learnMoreLink: {
    marginTop: theme.spacing(2),
  },
}));

const Features = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });


  return (
    <div className={className} data-aos="fade-up" {...rest}>



      <SectionHeader
        title={
          <span>
            The Best {' '}
            <Typography color="secondary" variant="inherit" component="span">Drywall Finishing Solutions </Typography>
             In One Reliable Business
          </span>

        }
        subtitle="Companies from across the GTA have had fantastic experiences using Drywall Magana."
        // ctaGroup={[
          // <Button
          //   variant="outlined"
          //   size={isMd ? 'large' : 'medium'}
          //   color="secondary"
          // >
          //   See all integrations
          // </Button>,
        // ]}
        fadeUp
      />
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            md={3}
            aos="fade-up"
          >
            <CardBase liftUp variant="outlined" align="left">
              <DescriptionListIcon
                title={item.title}
                subtitle={item.description}
                icon={
                  <IconAlternate
                    fontIconClass={item.icon}
                    size="medium"
                    color={colors.blue}
                  />
                }
                align="left"
              />
              <div style={{ flexGrow: 1 }} />

            </CardBase>
          </Grid>
        ))}

        <Button
          variant="contained"
          size={isMd ? 'large' : 'medium'}
          color="primary"
          align="center"
          href="/contact-page"
        >
          Contact us
        </Button>
      </Grid>
      <link href="css/mobiscroll.javascript.min.css" rel="stylesheet" />
      <script src="js/mobiscroll.javascript.min.js"></script>

    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Features;
