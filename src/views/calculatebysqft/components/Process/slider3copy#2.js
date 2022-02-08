import React from 'react';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
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
      width: 900,
      height: 2,
      padding: 50,
      marginBottom: 30,
      color:"#8a8a8a",
    },
    mark: {
      color:'#8a8a8a',
    },
    input: {
    width: 60,
    margin: 10,
    color: "#8a8a8a"
  },
    margin: {
      height: theme.spacing(3),
    },
}
));

const PrettoSlider = withStyles({
  root: {
    color: '#1316eb',
    height: 20,
    margin: 10,
  },
  thumb: {
    height: 48,
    width: 48,
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
    left: 'calc(0% + 4px)',
      color: '#1316eb',
  },
  track: {
    height: 16,
    borderRadius: 8,
  },
  rail: {
    height: 16,
    borderRadius: 8,
  },
})(Slider);

const Slider3 = props => {
  const { data, className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

const classes = useStyles();



const marks2 = [
{
value: 8,
label: "8'",
color: "#fff"
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
value: 1500,
label: '1,500 sq/ft',
},
{
value: 10000,
label: '10,000 sq/ft',
},
{
value: 20000,
label: '20,000 sq/ft',
},
];


const [value2, setValue2] = React.useState(8);
const [value1, setValue1] = React.useState(500);

const sqft = value1;
const height = value2;


const handleInputChange2 = (event) => {
  setValue2(event.target.value2 === '' ? '' : Number(event.target.value2));
};
const handleInputChange1 = (event) => {
  setValue1(event.target.value1 === '' ? '' : Number(event.target.value1));
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

function valuetext2(value2) {
  return `${value2}°C`;
}
function valuetext1(value1) {
  return `${value1}°C`;
}

const handleSliderChange2 = (event, newValue2) => {
      setValue2(newValue2);
      };
const handleSliderChange1 = (event, newValue1) => {
        setValue1(newValue1);
        };





  return (

  <div style={{height: "2000", color: '#8a8a8a'}} >

              <SectionHeader
              fadeUp
              style={{height: "2000", color: '#8a8a8a'}}
              />


              <Typography style={{textColor: "black"}} id="input-slider1" gutterBottom>
              Squarefootage on walls and ceiling
              </Typography>
              <Grid container spacing={2} alignItems="center">

<Grid item xs
style={{color: '#8a8a8a'}}>

<PrettoSlider
    valueLabelDisplay="auto"
    aria-label="pretto slider"
    value={typeof value1 === 'number' ? value1 : 0}//
    onChange={handleSliderChange1}
    aria-labelledby="input-slider1"
    defaultValue={500}
    min={1500}
    max={20000}
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
                min: 1500,
                max: 20000,
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
                      <Grid item
                      style={{color: '#8a8a8a'}}>
                        <Input
                          style={{color: '#8a8a8a'}}
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




              <p class="content"><b>Total:$</b>
              <Input
              className={classes.input}
              value={
              (sqft * (height*0.125))*1.2}
              // (sqft * (height*0.125))*0.9)

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
