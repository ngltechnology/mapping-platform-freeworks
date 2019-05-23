export const STEP_INCREMENT = "STEP_INCREMENT"
export const STEP_DECREMENT = "STEP_DECREMENT"

export const step_increment = () => ({
	type: STEP_INCREMENT,
})
export const step_decrement = () => ({
	type: STEP_DECREMENT
})

const initialState = { activeStep: 0 }
export const authentication = (state=initialState, action) => {
	switch(action.type){
		case STEP_INCREMENT:
			return Object.assign({},{
				activeStep: state.activeStep + 1,
			});
		case STEP_DECREMENT:
			return Object.assign({},{
				activeStep: state.activeStep - 1,
			});
		default:
			return state;
	}
}