import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider, Button} from '@material-ui/core';
import { IconAlternate, SectionHeader } from 'components/molecules';
import { Section, Parallax } from 'components/organisms';
import {
  Welcome,
  MadCap,
  Process,
  Adidas,
  Larq,
  Nike,
  Reviews,
  Contact,
} from './components';

import { reviews } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  fullHeight: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disablePaddingTop: {
    paddingTop: 0,
  },
  scrollIcon: {
    background: 'transparent !important',
    border: `2px solid ${colors.amber[500]}`,
    cursor: 'pointer',
  },
  scrollTopIcon: {
    margin: '0 auto',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(12),
    },
  },
  madcapSection: {
    backgroundColor: '#0000008a',
  },
  adidasSection: {
    backgroundColor: '#003c0580',
  },
  larqSection: {
    backgroundColor: '#2d402f80',
  },
  nikeSection: {
    backgroundColor: '#5f3f3f80',
  },
}));

const Agency = () => {
  const classes = useStyles();

  const scrollTo = id => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };
  return (
    <div className={classes.root}>
      <div className={classes.fullHeight}>
        <Section className={classes.disablePaddingTop}>
          <Welcome />
        </Section>
        <IconAlternate
          shape="circle"
          fontIconClass="fas fa-chevron-down"
          color={colors.amber}
          size="small"
          className={classes.scrollIcon}
          onClick={() => scrollTo('calc1')}
        />

      </div>
      <Parallax
        backgroundImage="images/instbckgrnd.png"
        id="calc1"
      >
        <div className={clsx(classes.fullHeight, classes.madcapSection)}>
          <Section>
            <MadCap />
          </Section>
          <IconAlternate
            id="calcdos"
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.amber}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo('calc2')}
            data-aos="fade-up"
          />
          <SectionHeader
            ctaGroup={[
              <Button variant="outlined" color="secondary" size="small" href="/portfolio-page">
                See portfolio
              </Button>,
            ]}
            disableGutter
            data-aos="fade-up"
          />
        </div>
      </Parallax>
      <div className={classes.fullHeight} id="calc2">
        <Section>
          <Process />
        </Section>
        <IconAlternate
          shape="circle"
          fontIconClass="fas fa-chevron-down"
          color={colors.amber}
          size="small"
          className={classes.scrollIcon}
          onClick={() => scrollTo('agency-adidas')}
          data-aos="fade-up"
        />
        <SectionHeader
          ctaGroup={[
            <Button variant="outlined" color="secondary" size="small" href="/portfolio-page">
              See portfolio
            </Button>,
          ]}
          disableGutter
          data-aos="fade-up"
        />
      </div>
      <Parallax
        backgroundSize="cover"
        backgroundImage="images/IGliftparallax.png"
        id="agency-adidas"
      >
        <div className={clsx(classes.fullHeight, classes.adidasSection)}>
          <Section>
            <Adidas />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.amber}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo('agency-larq')}
            data-aos="fade-up"
          />
        </div>
      </Parallax>
      <Parallax
        backgroundImage="images/curiosaSparallax.jpg"
        id="agency-larq"
      >
        <div className={clsx(classes.fullHeight, classes.larqSection)}>
          <Section>
            <Larq />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.amber}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo('agency-nike')}
            data-aos="fade-up"
          />
        </div>
      </Parallax>
      <Parallax
        backgroundImage="images/instabgparallax.png"
        id="agency-nike"
      >
        <div className={clsx(classes.fullHeight, classes.nikeSection)}>
          <Section>
            <Nike />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.amber}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo('agency-reviews')}
            data-aos="fade-up"
          />
        </div>
      </Parallax>
      <Section id="agency-reviews">
        <Reviews data={reviews} />
      </Section>
      <Divider />
      <Section>
        <Contact />
      </Section>
      <IconAlternate
        shape="circle"
        fontIconClass="fas fa-chevron-up"
        color={colors.amber}
        size="small"
        className={clsx(classes.scrollIcon, classes.scrollTopIcon)}
        onClick={() => scrollTo('calc1')}
        data-aos="fade-up"
      />
      <Divider />
    </div>
  );
};

export default Agency;
