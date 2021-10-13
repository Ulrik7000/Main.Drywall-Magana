import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';


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
      padding: 50,
      marginBottom: 30,
    },
    input: {
    width: 42,
  },
    margin: {
      height: theme.spacing(3),
    },
}
));

const PrettoSlider = withStyles({
  root: {
    color: '#1316eb',
    height: 8,
    margin: 10,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const Slider1 = props => {
  const { children, open, data, className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

    const [value1, setValue1] = React.useState(30);

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

const marks1 = [
{
value: 30,
label: '30 sheets',
},
{
value: 200,
label: '200 sheets',
},
{
value: 400,
label: '400 sheets',
},
];


function valuetext1(value1) {
  return `${value1}°C`;
}

  const classes = useStyles();

  const handleSliderChange1 = (event, newValue1) => {
    setValue1(newValue1);
  };

  return (
  <div className={classes.root}>
        <Typography id="" gutterBottom>
          # of sheets installed
        </Typography>
        <Grid container spacing={2} alignItems="center">
  <Grid item>
  </Grid>
  <Grid item xs>

  <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          value={typeof value1 === 'number' ? value1 : 0}//
          onChange={handleSliderChange1}
          aria-labelledby="input-slider1"
          defaultValue={30}
          min={30}
          max={400}
          getAriaValueText={valuetext1}//
          step={5}
          marks={marks1}
          valueLabelDisplay="auto"
        />
        </Grid>

                <Grid item>
                  <Input
                    className={classes.input}
                    value={value1}
                    margin="dense"
                    onChange1={handleInputChange1}
                    inputProps={{
                      step: 5,
                      min: 30,
                      max: 400,
                      type: '',
                      'aria-labelledby': 'input-slider1',
                    }}
                  />

                </Grid>
              </Grid>
                

      </div>

      );
  };

  export default Slider1;
