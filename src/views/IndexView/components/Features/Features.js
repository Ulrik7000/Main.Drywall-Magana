import React from 'react';
import PropTypes from 'prop-types';
import { Grid, colors, makeStyles } from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
}));

const data = [{
  icon: 'fas fa-hand-holding-heart',
  color: colors.indigo,
  title: 'Certainty',
  subtitle: "Drywall Magana's specialized craftsmanship is focused on customer satisfaction.",
}, {
  icon: 'far fa-id-card',
  color: colors.indigo,
  title: 'Versatility',
  subtitle: "Drywall Magana's fool proof finishing system is compliant to each client's specific needs.",
}, {
  icon: 'fas fa-tasks',
  color: colors.indigo,
  title: 'Optimized performance',
  subtitle: 'Finishing process that has every step "set in stone", to complete your project without shortcuts.',
}, {
  icon: 'far fa-comments',
  color: colors.indigo,
  title: 'Customer driven',
  subtitle: "I'm convinced that constant feedback from my clients is the best way to achive the utmost quality for their projects.",
}, {
  icon: 'fas fa-gem',
  color: colors.indigo,
  title: 'Proffessional Experience',
  subtitle: 'I take pride on delivering the best finish on each project .',
}, {
  icon: 'far fa-calendar-alt',
  color: colors.indigo,
  title: 'Full availability',
  subtitle: 'I constantly update my schedule to make sure we have your project done when you need it done.',
}];

const Features = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="A full service experience you'd expect from a skilled tradesman"
        fadeUp
        titleProps={{
          variant: 'h3',
          color: 'textPrimary',
          className: classes.fontWeight900,
        }}
      />
      <Grid container spacing={2}>
        {data.map((adv, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={6}
            md={4}
            data-aos="fade-up"
          >
            <CardBase
              liftUp
              variant="outlined"
              style={{ borderTop: `5px solid ${adv.color[500]}` }}
            >
              <DescriptionListIcon
                icon={
                  <IconAlternate
                    fontIconClass={adv.icon}
                    color={adv.color}
                    shape="circle"
                    size="small"
                  />
                }
                title={adv.title}
                subtitle={adv.subtitle}
                align="left"
              />
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Features;
