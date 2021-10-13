import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Button, Typography } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Slider1 from './slider1';
import Slider2 from './slider2';
import Slider3 from './slider3';

import { Image, LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  listGrid: {
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },

  },
  root: {
      width: 500,
      height: 2,
      padding: 30,
    },
    input: {
    width: 42,
    margin: 10,
  },
    margin: {
      height: theme.spacing(3),
    },
}
));



const Solutions = props => {
  const { data, className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const classes = useStyles();


  const [value1, setValue1] = React.useState(40);
  function valuetext1(value1) {
    return `${value1}°C`;
  }
  const handleInputChange1 = (event) => {
    setValue1(event.target.value1 === '' ? '' : Number(event.target.value1));
  };

  const handleBlur1 = () => {
    if (value1 < 0) {
      setValue1(0);
    } else if (value1 > 100) {
      setValue1(100);
    }
  };

  const [value2, setValue2] = React.useState(8);
  function valuetext2(value2) {
    return `${value2}°C`;
  }
  const handleInputChange2 = (event) => {
    setValue2(event.target.value2 === '' ? '' : Number(event.target.value2));
  };

  const handleBlur2 = () => {
    if (value2 < 0) {
      setValue2(0);
    } else if (value2 > 100) {
      setValue2(100);
    }
  };

  const [value3, setValue3] = React.useState(8);
  function valuetext3(value3) {
    return `${value3}°C`;
  }
  const handleInputChange3 = (event) => {
    setValue3(event.target.value1 === '' ? '' : Number(event.target.value1));
  };

  const handleBlur3 = () => {
    if (value3 < 0) {
      setValue3(0);
    } else if (value3 > 100) {
      setValue3(100);
    }
  };


const [costo, setCosto] = React.useState(622.08);
const sheets = value1;
const height = value2;
const size = value3;


  function costotext() {

const sheets = value1;
const height = value2;
const size = value3;
const valor = sheets * (height*0.135)*(size*4)*0.6;


}

    return (
    <div id="soluciones" className={className} {...rest}>
      <SectionHeader
        title={
          <span>
            Your Drywall Finish {' '}
            <Typography component="span" variant="inherit" color="primary">Free Estimate Is Here</Typography>
          </span>
        }
        subtitle="Drywall Magana offers a simple series of steps to obtain your free estimate using this sliders."
        fadeUp
      />



      <Grid container justify="center">

<source src="images/70sheets.mp4" type="video/mp4"/>

          <Grid item container
            spacing={isMd ? 4 : 2}
            data-aos={'fade-up'}
            alignItems="center"
            justify="space-between"
            className={classes.listGrid}
          >

              <div>
              <Slider3/>
              </div>

              <Grid item xs={12} sm={6}>
              <iframe
                className={classes.listGrid}
                frameBorder="0"
                html="0"
                title="video"
                width="60%"
                height="600"
                src="https://www.kapwing.com/e/60e1a2ea2d8314006d200199"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              />
            </Grid>

          </Grid>

          <Grid item container justify="center" xs={12}>
            <Button
              variant="contained"
              color="primary"
              size={isMd ? 'large' : 'medium'}
              href="#clients"
            >
              See the clients we've worked with.
            </Button>
          </Grid>

          <div>
          <SectionHeader
            title={
                <Typography component="span" variant="inherit" color="primary"></Typography>
            }
            subtitle="This project on the video was quoted using this same estimating sytem. It was 9' high and done with a level 4 type of drywall finish which is the default finish used for this calculator. The project was painted at the time of recording by a different crew"
            fadeUp
          />
          </div>

        </Grid>

</div>
  );
};

Solutions.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Solutions;
