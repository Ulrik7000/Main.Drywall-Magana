import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, colors } from '@material-ui/core';
import { IconAlternate, SectionHeader } from 'components/molecules';
import { DescriptionListIcon, Section } from 'components/organisms';

const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
  noPaddingBottom: {
    paddingBottom: 0,
  },
  noPaddingTop: {
    paddingTop: 0,
  },
}));

const data = [
  {
    icon: 'fas fa-calculator',
    title: 'Built for the smart homeowner and contractor',
    subtitle:
      'This specialized calculator is built to get rid of the quote hunting proccess, saving you time and money by avoiding unethical pricing from inexperienced contractors.',
  },
  {
    icon: 'fas fa-business-time',
    title: 'Developed for time optimization',
    subtitle:
      'For the best usage of this calculator, just input the most details you can about your project, this will give you the most accurate cost of labour for your project. ',
  },
  {
    icon: 'fas fa-code',
    title: 'Wide range of pricing options',
    subtitle:
      "You can choose to either calculate by the number of sheets installed, the total square footage of the walls and ceilings of your project, the repair details, etcetera, and we will give you a free quote.",
  },
];
const Services = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      Accurate drywall finish calculator &nbsp;
      <Typography component="span" variant="inherit" color="primary">for free</Typography>
    </Typography>
  );

  const subtitle = (
    <Typography variant="h6" component="span" className={classes.fontWeight900}>
    If you are looking for a fast and reliable way to get your drywall finish estimate, take a look at
    <a href="/calculatebysheets"><Typography component="span" variant="inherit" color="primary"> this tool that Drywall Magana built for you.</Typography></a>
  </Typography>
);
  // 'If you are looking for a fast and reliable way to get your drywall finish estimate, take a look at this tool that Drywall Magana built for you.';

  return (
    <div className={className} {...rest}>
      <Section narrow className={classes.noPaddingBottom}>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleProps={{
            variant: 'h2',
            color: 'textPrimary',
          }}
          data-aos="fade-up"
        />
      </Section>
      <Section className={classes.noPaddingTop}>
        <Grid container spacing={isMd ? 4 : 2}>
          {data.map((item, index) => (
            <Grid key={index} item xs={12} sm={4} data-aos={'fade-up'}>
              <DescriptionListIcon
                title={item.title}
                subtitle={item.subtitle}
                icon={
                  <IconAlternate
                    fontIconClass={item.icon}
                    size="medium"
                    color={colors.indigo}
                  />
                }
                align="left"
              />
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>

<div>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4011556428762808"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-4011556428762808"
     data-ad-slot="5656720352"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</div>
  );
};

Services.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Services;
