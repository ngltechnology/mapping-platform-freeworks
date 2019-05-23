export const STEP_INCREMENT = "STEP_INCREMENT"
export const STEP_DECREMENT = "STEP_DECREMENT"
export const FORM_CHANGED = "FORM_CHANGED"

export const step_increment = () => ({
	type: STEP_INCREMENT,
})
export const step_decrement = () => ({
	type: STEP_DECREMENT
})
export const form_changed = e => ({
	type: FORM_CHANGED,
	key: e.target.name,
	value: e.target.value,
})

const initialState = {
	activeStep: 0,
	form: {}
}
export default (state=initialState, action) => {
	switch(action.type){
		case STEP_INCREMENT:
			return Object.assign({},{
				activeStep: state.activeStep + 1,
			});
		case STEP_DECREMENT:
			return Object.assign({},{
				activeStep: state.activeStep - 1,
			});
		case FORM_CHANGED:
			return Object.assign({},{
				
				form: {
					...state.form,
					[action.key]: action.value,
				}
			})
		default:
			return state;
	}
}
