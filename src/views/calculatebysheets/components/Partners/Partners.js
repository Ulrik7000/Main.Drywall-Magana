import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { Image } from 'components/atoms';

const useStyles = makeStyles(() => ({
  fontWeight700: {
    fontWeight: 700,
  },
  image: {
    maxWidth: 100,
  },
}));

const Partners = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div style={{scrollBehavior: 'smooth'}} id="ourWork" className={className} {...rest}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            color="textSecondary"
            align="center"
            className={classes.fontWeight700}
          >
            OURWORK has been featured in:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between">
            {data.map((partner, index) => (
              <Grid item container justify="center" xs={6} sm={2} key={index}>
                <Image
                  src={"https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Freedom_Mobile_logo.svg/1200px-Freedom_Mobile_logo.svg.png"}
                  alt="freedomMobile"
                  className={classes.image}
                  lazy={false}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Partners;
