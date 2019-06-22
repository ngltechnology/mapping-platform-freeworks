import { connect } from "react-redux"
import { push } from "connected-react-router"

import { step_increment, step_decrement } from "../actions/authentication.js"
import { dialog_on } from "../actions/dialog.js"
import StartStepper from "../components/StartStepper.jsx"

const mapStateToProps = state => ({
  activeStep: state.authentication.activeStep,
  infomations: state.authentication.form,
})
const mapDispatchToProps = dispatch => ({
    handleNext: () => dispatch(step_increment()),
    handleBack: () => dispatch(step_decrement()),
    OpenPolicy1: () => dispatch(dialog_on({
      name: "プライバシーポリシー",
      url: ""
    })),
    OpenPolicy2: () => dispatch(dialog_on({
      name: "利用規約",
      url: ""
    })),
  push: () => dispatch(push("/app/map")),
})

const StepperContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StartStepper)
export default StepperContainer;
