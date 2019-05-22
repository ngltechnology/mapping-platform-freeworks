import { connect } from "react-redux"
import FullScreenDialog from "../components/Dialog.jsx"
import { dialog_on, dialog_off } from "../actions"

const mapDispatchToProps = dispatch => ({
  dialogOn: () => dispatch(dialog_on()),
  dialogOff: () => dispatch(dialog_off())
})

const mapStateToProps = state => ({
  open: state.dialog.open,
})

export default connect(mapStateToProps, mapDispatchToProps)(FullScreenDialog)
