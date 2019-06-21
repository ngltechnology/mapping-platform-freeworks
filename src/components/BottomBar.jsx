import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PlaceIcon from '@material-ui/icons/Place';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

const BottomBar = props => {
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    props.handle_change(newValue)
  }
  return (
    <Paper square className={classes.root}>
      <Tabs
        value={props.barValue}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab icon={<PlaceIcon />} label="MAP" />
        <Tab icon={<CalendarTodayIcon />} label="SCHEDULE" />
        <Tab icon={<AccountCircleIcon />} label="ACCOUNT" />
      </Tabs>
    </Paper>
  );
 }
export default BottomBar;
