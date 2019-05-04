import { connect } from "react-redux"
import App from "../components/App"
import { cardOn, cardOff } from "../actions";


const mapStateToProps = state => ({
  checked: state.card.checked,
})
const mapDispatchToProps = dispatch => ({
  handleOn: () => dispatch(cardOn()),
  handleOff: () => dispatch(cardOff()),
})

const AppContainer = connect( mapStateToProps, mapDispatchToProps )(App)
export default AppContainer;
