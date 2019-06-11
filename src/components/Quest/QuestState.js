import { connect } from "react-redux"

const mapStateToProps = dispatch => ({
	questStart: () => {}
})

export default connect(
	null,
	mapStateToProps
)

//action
const QUEST_START = "QUEST_START"

const quest_start = () => ({
	type: QUEST_START,
})