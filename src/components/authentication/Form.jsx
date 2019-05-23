import React from "react"

import TextField from "@material-ui/core/TextField"


export const StepFirst = () => {
	const handleChange = event => {
		console.log(event.target.value)
		
	}
	return(
		<React.Fragment>
			<TextField 
				variant="outlined"
				label="first"
				onChange={handleChange}
			/>
		</React.Fragment>
	)
}

export const StepSecond = () => {
	const handleChange = event => {
		console.log(event.target.value)
		
	}
	return(
		<React.Fragment>
			<TextField
				variant="outlined"
				label="second"
				onChange={handleChange}
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
				label="Third"
				onChange={handleChange}
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
				label="Third"
				onChange={handleChange}
			/>
		</React.Fragment>
	)
}