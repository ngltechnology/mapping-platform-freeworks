import React from "react"
import { Button } from "@material-ui/core";

const Quest = props => {
	return(
		<React.Fragment>
			<Button variant="contained" onClick={props.questStart} >Quest Start</Button>
		</React.Fragment>
	)
}
export default Quest