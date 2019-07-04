import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  schedule: {
    height: "90vh",
    backgroundColor: "#f5f5f5"
  }
})

export default function Schedule() {
  const classes = useStyles()
  return (
    <div className={classes.schedule}>
    </div>
  )
}
