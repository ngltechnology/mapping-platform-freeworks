import React from "react"
import {
  Typography,
  Card,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Avatar,
  IconButton,
  withStyles
} from "@material-ui/core";
import "../styles/Account.scss"

const styles = {
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
  table: {
    
  },
  card: {
    
  }
}

const Account = props => {
  const { classes } = props
  const dummyurl = "https://material-ui.com/static/images/avatar/1.jpg"
  return(
    <React.Fragment>
      <div className={classes.header}>
        <IconButton className={classes.leftButton}>
          <Avatar className={classes.leftAvatar} src="../images/account/graph.png" />
        </IconButton>
        <IconButton className={classes.centerButton}>
          <Avatar className={classes.centerAvatar} src={dummyurl} />
        </IconButton>
        <IconButton className={classes.rightButton}>
          <Avatar className={classes.rightAvatar} >R</Avatar>
        </IconButton>
      </div>
      <div className={classes.bottom}>
        <Card className={classes.card}>
          
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell>Timeline</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </React.Fragment>
  )
}
export default withStyles(styles)(Account);
