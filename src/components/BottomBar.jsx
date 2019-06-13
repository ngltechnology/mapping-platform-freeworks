import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

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
        <Tab icon={<PhoneIcon />} label="MAP" />
        <Tab icon={<FavoriteIcon />} label="SCHEDULE" />
        <Tab icon={<PersonPinIcon />} label="ACCOUNT" />
      </Tabs>
    </Paper>
  );
}
export default BottomBar;
