import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card"
import Slider from '@material-ui/lab/Slider';

const useStyles = makeStyles({
	root: {
    height: 300,
    position: "absolute",
    top: "30px",
    right: "20px"
  },
})

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

const VarticalSlider = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <Typography id="vertical-slider" gutterBottom>
        Date
      </Typography>
      <Slider
          orientation="vertical"
          defaultValue={[20, 37]}
          aria-labelledby="vertical-slider"
          getAriaValueText={valuetext}
          marks={marks}
        />
    </Card>
  )
}
export default VarticalSlider
