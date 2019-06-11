import React from "react"
import { withStyles } from "@material-ui/core"

import VerticalLinearStepper from "./VartivalStepper.jsx"

const Authentiacation = ({classes}) => {
  return (
    <React.Fragment>
      <VerticalLinearStepper
        className={classes.stepper}
      />
    </React.Fragment>
  )
}

const styles = {
  stepper: {
    margin: "auto"
  }
}

export default withStyles(styles)(Authentiacation)
