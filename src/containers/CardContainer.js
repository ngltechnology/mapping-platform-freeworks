import { connect } from "react-redux"
import GrowCard from "../components/Card.jsx"
import { cardOff, dialog_on } from "../actions"

const mapStateToProps = state => ({
  checked: state.card.checked,
  dialogOpen: state.dialog.open,
  name: state.quest.name,
  rewards: state.quest.reward,
  photoURL: state.quest.photoURL,
})

const mapDispatchToProps = dispatch => ({
  handleOff: () => dispatch(cardOff()),
  dialogOn: () => dispatch(dialog_on())
})

const GrowCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GrowCard)

export default GrowCardContainer;
