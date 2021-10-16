import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon, CardBase } from 'components/organisms';

import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
// import store
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  image: {
    width: 90,
    height: 90,
    objectFit: 'contain',
    marginBottom: theme.spacing(1),
  },
  descriptionListIcon: {
    '& .description-list-icon__title': {
      fontWeight: 400,
      fontSize: 16,
    },
  },
  cardBase: {
    borderRadius: theme.spacing(2),
    background: theme.palette.alternate.main,
  },
}));

const Categories = props => {

  const { linkUrl, data, className, item, ...rest } = props;
  const classes = useStyles();

  return (
    <div id='categories'> 
    <div
    className={className} {...rest}

    >


      <SectionHeader id="categs" name="categs" title="Categories" align="left" />
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={6} md={2} key={index} data-aos="fade-up">
          <Link to=
          {item.linkUrl}
          >
            <CardBase noBorder noShadow liftUp className={classes.cardBase}
            >
              <DescriptionListIcon
                className={classes.descriptionListIcon}
                icon={
                  <Image
                    {...item.icon}
                    alt={item.title}
                    className={classes.image}

                  />
                }
                title={item.title}
              />
            </CardBase>
            </Link>
          </Grid>
        ))}
      </Grid>

    </div>
</div>
  );
};

Categories.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Categories;
