import React from "react"
import { connect } from "react-redux"

import TextField from "@material-ui/core/TextField"


const mapStateToProps = state => ({})
const mapDispatchProps = dispatch => ({})

const StepFirst = props => {
	return(
		<React.Fragment>
			<TextField 
				variant="outlined"
				label="first"
			/>
		</React.Fragment>
	)
}

const StepSecond = props => {
	return(
		<React.Fragment>
			<TextField
				variant="outlined"
				label="second"
			/>
		</React.Fragment>
	)
}

export const StepThird= connect(
	mapStateToProps,
	mapDispatchProps
	)(
	props => {
		const handleChange = event => {
			console.log(event.target.value)
			
		}
		return(
			<React.Fragment>
				<TextField
					variant="outlined"
					label="Third"
					onChange={handleChange}
				/>
			</React.Fragment>
		)
})



