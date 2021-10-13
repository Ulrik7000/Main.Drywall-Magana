import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section, CardPricingStandard } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionContainer: {
    backgroundColor: theme.palette.primary.dark,
    paddingBottom: theme.spacing(20),
    borderRadius: '0 0 100% 0',
  },
  textWhite: {
    color: 'white',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(0, 2),
  },
  toggleButtonGroup: {
    background: 'transparent',
  },
  toggleButton: {
    background: 'transparent',
    border: '1px solid white',
    padding: theme.spacing(1, 5),
  },
  toggleButtonActive: {
    backgroundColor: 'white !important',
  },
  toggleTitle: {
    textTransform: 'capitalize',
  },
  toggleTitleActive: {
    color: theme.palette.primary.main,
  },
  pricingContainer: {
    position: 'relative',
    marginTop: theme.spacing(-20),
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  cardPricing: {
    '& .countup-number__count-wrapper': {
      textAlign: 'left',
      marginBottom: 0,
      fontWeight: 'bold',
    },
  },
}));

const Main = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [pricingOption, setPricingOption] = React.useState('min9');

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
  };

  return (
    <div className={className} {...rest}>
      <div className={classes.sectionContainer}>
        <Section narrow className={classes.pagePaddingTop}>
          <>
          <SectionHeader
            title="Pricing alternatives"
            subtitle="The previous calculators are built based on a finishing type level 4, which is the default drywall finish on 90% of residential and comercial projects. If the prices on the previous calculators didn't match your budget, you can take a look at this other 2 alternatives,which are the next most requested level of drywall finish. "
            titleProps={{
              className: clsx(classes.textWhite, classes.fontWeightBold),
              variant: 'h2',
            }}
            subtitleProps={{
              className: classes.textWhite,
            }}
            data-aos="fade-up"
          />
          <div className={classes.toggleContainer} data-aos="fade-up">
            <ToggleButtonGroup
              value={pricingOption}
              exclusive
              onChange={handleClick}
              className={classes.toggleButtonGroup}
            >
              <ToggleButton
                value="min9"
                className={clsx(
                  classes.toggleButton,
                  pricingOption === 'min9' ? classes.toggleButtonActive : {},
                )}
              >
                <Typography
                  variant="subtitle1"
                  className={clsx(
                    classes.fontWeightBold,
                    classes.textWhite,
                    classes.toggleTitle,
                    pricingOption === 'min9' ? classes.toggleTitleActive : {},
                  )}
                >
                  9' high ceilings and under
                </Typography>
              </ToggleButton>
              <ToggleButton
                value="plus10"
                className={clsx(
                  classes.toggleButton,
                  pricingOption === 'plus10' ? classes.toggleButtonActive : {},
                )}
              >
                <Typography
                  variant="subtitle1"
                  className={clsx(
                    classes.fontWeightBold,
                    classes.textWhite,
                    classes.toggleTitle,
                    pricingOption === 'plus10'
                      ? classes.toggleTitleActive
                      : {},
                  )}
                >
                  10' high ceilings and over
                </Typography>
              </ToggleButton>

            </ToggleButtonGroup>
          </div>
          </>
        </Section>
      </div>
      <div className={classes.pricingContainer}>
        <div>
          <Section className={classes.sectionNoPaddingTop}>
            <Grid container spacing={isMd ? 4 : 2}>
              {data.map((item, index) => (
                <Grid item xs={12} md={4} data-aos="fade-up" key={index}>
                  <CardPricingStandard
                    variant="outlined"
                    withShadow={item.isHighlighted ? true : false}
                    title={item.title}
                    liftUp
                    subtitle={item.subtitle}
                    priceComponent={
                      <Typography variant="h3" color="textPrimary">
                        $
                        {pricingOption === 'min9'
                          ? item.min9
                          : item.plus10
                          }
                      </Typography>
                    }
                    features={item.features}
                    featureCheckComponent={
                      <Icon
                        fontIconClass="far fa-check-circle"
                        fontIconColor={theme.palette.primary.main}
                      />
                    }
                    cta={
                      <Button
                        color="primary"
                        variant={item.isHighlighted ? 'contained' : 'outlined'}
                        fullWidth
                        size="large"
                        href="https://www.usg.com/content/dam/USG_Marketing_Communications/canada/product_promotional_materials/finished_assets/cgc-construction-handbook-ch05-finishing-drywall-systems-can-en.pdf"
                        target="_blank"
                      >
                        Click here for more details
                      </Button>
                    }
                    disclaimer={item.disclaimer}
                    className={classes.cardPricing}
                  />
                </Grid>
              ))}
            </Grid>
          </Section>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Main;
