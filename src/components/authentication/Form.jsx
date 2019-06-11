import React from "react"
import { connect } from "react-redux"
import TextField from "@material-ui/core/TextField"
import { form_changed } from "./AuthenticationState";


const mapStateToProps = () => null
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
				name="number"
				variant="outlined"
				label="電話番号"
				type="number"
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

export const StepSecond = connect(
	mapStateToProps,
	mapDispatchToProps
)(
	({handleChange}) => {

	return(
		<React.Fragment>
			<TextField
				name="a"
				variant="outlined"
				label="Name"
				onChange={handleChange}
				helperText="フルネームで入力"
				margin="normal"
				fullWidth
				required
			/>
			<TextField
				name="b"
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
})

export const StepThird = connect(
	mapStateToProps,
	mapDispatchToProps
)(({handleChange}) => {
	return(
		<React.Fragment>
			<TextField
				variant="outlined"
				label="銀行名"
				onChange={handleChange}
        margin="normal"
        fullWidth
			/>
			<TextField
				variant="outlined"
				label="支店名"
				onChange={handleChange}
        margin="normal"
        fullWidth
			/>
			<TextField
				type="number"
				variant="outlined"
				label="口座番号"
				onChange={handleChange}
        margin="normal"
        fullWidth
			/>
		</React.Fragment>
	)
})

