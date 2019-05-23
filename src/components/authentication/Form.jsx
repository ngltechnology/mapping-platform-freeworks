import React from "react"
import { connect } from "react-redux"
import TextField from "@material-ui/core/TextField"
import { form_changed } from "./AuthenticationState";


const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
	handleChange: e => dispatch(form_changed(e))
})

export const StepFirst = connect(
	mapStateToProps,
	mapDispatchToProps
)(props => {
	return(
		<React.Fragment>
			<TextField
				variant="outlined"
				label="Name"
				onChange={props.handleChange}
				helperText="フルネームで入力"
				margin="normal"
				name="name"
				fullWidth
				required
			/>
			<TextField
				name="test"
				variant="outlined"
				label="second"
				onChange={props.handleChange}
				helperText=""
				margin="normal"
				fullWidth
				required
			/>
			<TextField
				name="number"
				variant="outlined"
				label="second"
				onChange={props.handleChange}
				helperText=""
				margin="normal"
				fullWidth
				required
			/>
		</React.Fragment>
	)
})

export const StepSecond = () => {
	const handleChange = event => {
		console.log(event.target.value)
		
	}
	return(
		<React.Fragment>
			<TextField 
				variant="outlined"
				label="Name"
				onChange={handleChange}
				helperText="フルネームで入力"
				margin="normal"
				fullWidth
				required
			/>
			<TextField 
				variant="outlined"
				label="Name"
				onChange={handleChange}
				helperText="フルネームで入力"
				margin="normal"
				fullWidth
				required
			/>
		</React.Fragment>
	)
}

export const StepThird = () => {
	const handleChange = event => {
		console.log(event.target.value)
		
	}
	return(
		<React.Fragment>
			<TextField
				variant="outlined"
				label="銀行名"
				onChange={handleChange}
				margin="normal"
			/>
			<TextField
				variant="outlined"
				label="支店名"
				onChange={handleChange}
				margin="normal"
			/>
			<TextField
				type="number"
				variant="outlined"
				label="口座番号"
				onChange={handleChange}
				margin="normal"
			/>
		</React.Fragment>
	)
}
export const StepFourth = () => {
	const handleChange = event => {
		console.log(event.target.value)	
	}
	return(
		<React.Fragment>
			<TextField
				variant="outlined"
				label="銀行名"
				onChange={handleChange}
			/>
			<TextField
				variant="outlined"
				label="支店名"
				onChange={handleChange}
			/>
			<TextField
				type="number"
				variant="outlined"
				label="口座番号"
				onChange={handleChange}
			/>
		</React.Fragment>
	)
}

