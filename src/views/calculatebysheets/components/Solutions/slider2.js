import React from 'react';
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
    margin: 10,
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

const Slider2 = props => {
  const { data, className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

    const [value2, setValue2] = React.useState(8);

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


const marks2 = [
{
value: 8,
label: "8'",
},
{
value: 9,
label: "9'",
},
{
value: 10,
label: "10'",
},
{
value: 11,
label: "11'>",
},
];


function valuetext2(value2) {
  return `${value2}°C`;
}

  const classes = useStyles();

  const handleSliderChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
  <div className={classes.root}>
        <Typography id="input-slider2" gutterBottom>
          Height of your project
        </Typography>
        <Grid container spacing={2} alignItems="center">
  <Grid item>
  </Grid>
  <Grid item xs>

  <PrettoSlider
          value={value2}
          onChange={handleSliderChange2}
          aria-labelledby="input-slider2"
          defaultValue={30}
          min={8}
          max={11}
          getAriaValueText={valuetext2}
          aria-labelledby="discrete-slider-always2"
          step={1}
          marks={marks2}
          valueLabelDisplay="auto"
        />
        </Grid>
                <Grid item>
                  <Input
                    className={classes.input}
                    value={value2}
                    margin="dense"
                    onChange={handleInputChange2}
                    onBlur={handleBlur2}
                    inputProps={{
                      step: 5,
                      min: 30,
                      max: 400,
                      type: '',
                      'aria-labelledby': 'input-slider2',
                    }}
                  />
                </Grid>
              </Grid>
      </div>

      );
  };

  export default Slider2 ;
