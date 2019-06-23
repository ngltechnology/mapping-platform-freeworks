import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card"
import Slider from '@material-ui/lab/Slider';

const useStyles = makeStyles({
	root: {
    height: 400,
    padding: "10px",
    position: "absolute",
    top: "30px",
    right: "20px"
  },
  slider: {
    height: 350,
    margin: 10,
  }
})

const valuetext = (value) => {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: '今日',
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
    label: '今日',
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
          className={classes.slider}
          orientation="vertical"
          defaultValue={[20, 100]}
          aria-labelledby="vertical-slider"
          getAriaValueText={valuetext}
          marks={marks}
        />
    </Card>
  )
}
export default VarticalSlider
