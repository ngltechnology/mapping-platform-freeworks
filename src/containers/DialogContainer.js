import { connect } from "react-redux"
import FullScreenDialog from "../components/Dialog"
import { dialog_off, dialog_on } from "../actions/dialog";

const mapStateToProps = state => ({
  open: state.dialog.open,
  dialogTitle: state.dialog.dialogTitle,
  dialogURL: state.dialog.dialogURL,
})
const mapStateToProps2 = state => ({
  open: state.dialog.open,
  dialogTitle: state.quest.name,
  dialogURL: state.quest.homepageURL,
})
const mapDispatchToProps = dispatch => ({
  dialogOn: () => dispatch(dialog_on()),
  dialogOff: () => dispatch(dialog_off())
})

export const DialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FullScreenDialog)

export const DialogContainer2 = connect(
  mapStateToProps2,
  mapDispatchToProps
)(FullScreenDialog)
