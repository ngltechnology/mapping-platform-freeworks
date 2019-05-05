import React from "react"
import { Avatar, withStyles } from "@material-ui/core";

const Styles = {
  header: {
    backgroundColor: "black",
    width: "100vw",
    height: "50vh",
  },
  avatar: {
    margin:"auto",
    top: "20vh",
    backgroundColor: "orange",
    width: "10vh",
    height: "10vh",
  }
}

const Account = props => {
  const { classes } = props;
  const dummyurl = "https://material-ui.com/static/images/avatar/1.jpg"
  return(
    <React.Fragment>
      <div className={classes.header}>
        <Avatar src={dummyurl} className={classes.avatar} />
      </div>
      
    </React.Fragment>
  )
}
export default withStyles(Styles)(Account);