import { connect } from "react-redux"
import App from "../components/App"
import { cardOn, cardOff } from "../actions";


const mapStateToProps = state => ({
  checked: state.checked
})
const mapDispatchToProps = dispatch => ({
  handleOn: () => dispatch(cardOn()),
  handleOff: () => dispatch(cardOff()),
})

const AppContaner = connect({ mapStateToProps, mapDispatchToProps })(App)
export default AppContaner;