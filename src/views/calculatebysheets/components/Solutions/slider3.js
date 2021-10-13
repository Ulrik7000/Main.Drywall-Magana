import React from 'react';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import {Slider2, Height} from './slider2';
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
      padding: 50,
      marginBottom: 30,
    },
    input: {
    width: 60,
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

const Slider3 = props => {
  const { data, className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

const classes = useStyles();



const marks3 = [
{
value: 8,
label: "4'x8'",
},
{
value: 10,
label: "4'x10'",
},
{
value: 12,
label: "4'x12'",
},
];
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
const marks1 = [
{
value: 40,
label: '40 sheets',
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


const [value3, setValue3] = React.useState(8);
const [value2, setValue2] = React.useState(8);
const [value1, setValue1] = React.useState(40);

const sheets = value1;
const height = value2;
const size = value3;


const handleInputChange3 = (event) => {
  setValue3(event.target.value3 === '' ? '' : Number(event.target.value3));
};
const handleInputChange2 = (event) => {
  setValue2(event.target.value2 === '' ? '' : Number(event.target.value2));
};
const handleInputChange1 = (event) => {
  setValue1(event.target.value1 === '' ? '' : Number(event.target.value1));
};

const handleBlur3 = () => {
  if (value3 < 0) {
    setValue3(0);
  } else if (value3 > 400) {
    setValue3(400);
  }
};
const handleBlur2 = () => {
  if (value2 < 0) {
    setValue2(0);
  } else if (value2 > 400) {
    setValue2(400);
  }
};
const handleBlur1 = () => {
  if (value1 < 0) {
    setValue1(0);
  } else if (value1 > 400) {
    setValue1(400);
  }
};

function valuetext3(value3) {
  return `${value3}°C`;
}
function valuetext2(value2) {
  return `${value2}°C`;
}
function valuetext1(value1) {
  return `${value1}°C`;
}

const handleSliderChange3 = (event, newValue3) => {
    setValue3(newValue3);
    };
const handleSliderChange2 = (event, newValue2) => {
      setValue2(newValue2);
      };
const handleSliderChange1 = (event, newValue1) => {
        setValue1(newValue1);
        };






  return (

  <div style={{height: "200%"}} className={classes.root}>

  <SectionHeader
    title={"Quote calculator"}
    subtitle="Select with the slider below the number of sheets, height of your proyect's ceiling and size the sheets installed to obtain your project's estimate cost."
    fadeUp
  />


              <Typography id="input-slider1" gutterBottom>
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
    defaultValue={40}
    min={40}
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
              onChange={handleInputChange1}
              inputProps={{
                step: 5,
                min: 40,
                max: 400,
                type: '',
                'aria-labelledby': 'input-slider1',
              }}
            />

          </Grid>
                    </Grid>

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
                defaultValue={8}
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
                            min: 8,
                            max: 11,
                            type: '',
                            'aria-labelledby': 'input-slider2',
                          }}
                        />
                      </Grid>
                    </Grid>


              <Typography id="input-slider3" gutterBottom>
                      Factory size of each drywall sheet (input in length)
              </Typography>
              <Grid container spacing={2} alignItems="center">
                    <Grid item>
                    </Grid>
                    <Grid item xs>

                    <PrettoSlider
                      value={typeof value3 === 'number' ? value3 : 0}
                      onChange={handleSliderChange3}
                      aria-labelledby="input-slider3"
                      defaultValue={8}
                      min={8}
                      max={12}
                      getAriaValueText={valuetext3}
                      aria-labelledby="discrete-slider-always3"
                      step={2}
                      marks={marks3}
                      valueLabelDisplay="auto"
                    />
                    </Grid>
                            <Grid item>
                              <Input
                                className={classes.input}
                                value={value3}
                                margin="dense"
                                onChange1={handleInputChange3}
                                onBlur1={handleBlur3}
                                inputProps={{
                                  step: 2,
                                  min: 8,
                                  max: 12,
                                  type: '',
                                  'aria-labelledby': 'input-slider3',
                                }}
                              />
                            </Grid>
                    </Grid>



              <p class="content"><b>Total:$</b>
              <Input
              className={classes.input}
              value={
              (sheets * (height*0.135)*(size*4))*0.6
              // size+height+sheets
              }
              margin="dense"
              onChange={handleInputChange1}
              onBlur={handleBlur1}
              inputProps={{
                step: 5,
                min: 0,
                max: 20000,
                type: 'number',
                'aria-labelledby': 'input-slider3',
              }}
              /></p>



      </div>

      );
  };

  export default Slider3;
