import { connect } from "react-redux"
//import { withRouter } from "react-router-dom"
import GrowCard from "../components/Card.jsx"
import { card_dialog_on } from "../actions/dialog"
import { cardOff } from "../actions/index.js";

const mapStateToProps = state => ({
  checked: state.card.checked,
  dialogOpen: state.dialog.open,
  name: state.quest.name,
  rewards: state.quest.reward,
  photoURL: state.quest.photoURL,
})

const mapDispatchToProps = dispatch => ({
  handleOff: () => dispatch(cardOff()),
  dialogOn: () => dispatch(card_dialog_on())
})

const GrowCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GrowCard)

export default GrowCardContainer
