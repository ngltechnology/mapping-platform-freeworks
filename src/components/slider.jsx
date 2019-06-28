import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const useStyles = makeStyles(() => ({
  root: {
    width: "80vw",
    position: "absolute",
    left: "10vw",
    top: "8vh"
  }
}))

const marks = [
  {
    value: 0,
    label: 'today',
  },
  {value: 10,},
  {value: 20,},
  {value: 30,},
  {value: 40,},
  {value: 50,},
  {value: 60,},
  {value: 70,},
  {value: 80,},
  {value: 90,},
  {
    value: 100,
    label: '10days after',
  },
];

function valuetext(value) {
  return `${value}`;
}
function valueLabelFormat(value) {
  return `${marks.findIndex(mark => mark.value === value)}d`;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        valueLabelFormat={valueLabelFormat}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="on"
        step={null}
        marks={marks}
      />
      {/* <Typography id="discrete-slider" gutterBottom>
        date
      </Typography> */}
    </div>
  );
}

