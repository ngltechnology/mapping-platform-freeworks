import React from "react"
import { connect } from "react-redux"

import { withStyles } from "@material-ui/core"

import VerticalLinearStepper from "./VartivalStepper.jsx"

const Authentiacation = ({...props}) => {
  return (
    <React.Fragment>
      <VerticalLinearStepper />
    </React.Fragment>
  )
}

const styles = {}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapStateToProps
)(
  withStyles(styles)(Authentiacation)
)
