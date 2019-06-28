import React from "react"
import {
  //Typography,
  Card,
  Table,
  //TableHead,
  TableCell,
  TableRow,
  TableBody,
  Avatar,
  IconButton,
  withStyles,
  Divider
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import "../styles/Account.scss"

const styles = {
  wrapper: {
    height: "90vh",
    position: "relative",
    boxSizing: "border-box",
  },
  header: {
    backgroundColor: "black",
    height: "30vh",
    width: "100vw"
  },
  leftButton: {
    top: "8vh",
    width: "20vw",
    height: "20vw",
    padding: "0"
  },
  leftAvatar: {
    width: "20vw",
    height: "20vw",
  },
  centerButton: {
    top: "8vh",
    width: "25vw",
    height: "25vw",
    padding: "0",
    margin: "5vw"
  },
  centerAvatar: {
    backgroundColor: "orange",
    width: "25vw",
    height: "25vw",
  },
  rightButton: {
    top: "8vh",
    width: "20vw",
    height: "20vw",
    padding: "0"
  },
  rightAvatar: {
    backgroundColor: "orange",
    width: "20vw",
    height: "20vw",
  },
  bottom: {
    top: "30vh"
  },
}

const Account = ({
  classes,
  photoURL,
  displayName,
  doLogout, 
})=> {
  // const dummyurl = "https://material-ui.com/static/images/avatar/1.jpg"
  const notifications = ["通知！", "ここだよ", "helloworld"]
  return(
    <div className={classes.wrapper}>
      <IconButton onClick={doLogout} className={classes.menuIcon}>
        <MoreVertIcon />
      </IconButton>
      <div className={classes.header}>
        <IconButton className={classes.leftButton}>
          <Avatar className={classes.leftAvatar} src="../images/account/graph.png"/>
        </IconButton>
        <IconButton className={classes.centerButton}>
          <Avatar className={classes.centerAvatar} src={photoURL} />
        </IconButton>
        <IconButton className={classes.rightButton}>
          <Avatar className={classes.rightAvatar} >R</Avatar>
        </IconButton>
        {displayName}
      </div>
      <div className={classes.bottom}>
        <Card className={classes.card}>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell>Timeline</TableCell>
                <TableCell>ここに通知</TableCell>
              </TableRow>
              {notifications.map((notice, index) => (
                <TableRow key={index}>
                  <Divider />
                  <TableCell>{notice}</TableCell>
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  )
}
export default withStyles(styles)(Account);
